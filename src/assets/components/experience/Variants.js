export const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            opacity: { duration: 0.5, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 150, damping: 8 }
        }
    }
};

export const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.3, when: "beforeChildren" }
    }
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -150 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            opacity: { duration: 0.5, ease: "easeInOut" },
            x: { type: "spring", stiffness: 150, damping: 15 },
        }
    }
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 150 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            opacity: { duration: 0.5, ease: "easeInOut" },
            x: { type: "spring", stiffness: 150, damping: 15 },
        }
    }
};