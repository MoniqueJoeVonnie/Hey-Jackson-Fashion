import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { useToast } from "./ToastContext";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const { showToast } = useToast();

    const [wishlistItems, setWishlistItems] = useState(
        () => {
        try {
            const savedWishlist = localStorage.getItem(
            "heyJacksonWishlist"
            );

            return savedWishlist
            ? JSON.parse(savedWishlist)
            : [];
        } catch (error) {
            console.error(
            "Unable to load wishlist:",
            error
            );

            return [];
        }
        }
    );

    useEffect(() => {
        localStorage.setItem(
        "heyJacksonWishlist",
        JSON.stringify(wishlistItems)
        );
    }, [wishlistItems]);

    function isInWishlist(productId) {
        return wishlistItems.some(
        (item) => item.id === productId
        );
    }

    function addToWishlist(product) {
        setWishlistItems((currentItems) => {
            const alreadySaved = currentItems.some(
            (item) => item.id === product.id
            );

            if (alreadySaved) {
            return currentItems;
            }

            showToast({
            title: "Added to Wishlist",
            message: `${product.name} saved successfully.`,
            type: "wishlist",
            });

            return [...currentItems, product];
        });
    }

    function removeFromWishlist(productId) {
        setWishlistItems((currentItems) =>
            currentItems.filter((item) => item.id !== productId)
        );
    }

    function toggleWishlist(product) {
        setWishlistItems((currentItems) => {
            const alreadySaved = currentItems.some(
            (item) => item.id === product.id
            );

            if (alreadySaved) {
            showToast({
                title: "Removed from Wishlist",
                message: `${product.name} removed successfully.`,
                type: "wishlist-remove",
            });

            return currentItems.filter(
                (item) => item.id !== product.id
            );
            }

            showToast({
            title: "Added to Wishlist",
            message: `${product.name} saved successfully.`,
            type: "wishlist",
            });

            return [...currentItems, product];
        });
    }

    function clearWishlist() {
        setWishlistItems([]);

        showToast({
            title: "Wishlist Cleared",
            message: "All items were removed from your wishlist.",
            type: "wishlist-remove",
        });
    }

    const value = {
        wishlistItems,
        wishlistCount: wishlistItems.length,
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        clearWishlist,
    };

    return (
        <WishlistContext.Provider value={value}>
        {children}
        </WishlistContext.Provider>
    );
    }

    export function useWishlist() {
    const context = useContext(WishlistContext);

    if (!context) {
        throw new Error(
        "useWishlist must be used inside WishlistProvider"
        );
    }

    return context;
    }