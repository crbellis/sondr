import React from "react";
import "./FadeIn.css";
interface ParentCompProps {
    child?: React.ReactNode;
}

const FadeIn: React.FC<ParentCompProps> = (props) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                if (domRef.current) {
                    observer.unobserve(domRef.current);
                }
            }
        });
        if (domRef.current !== null) {
            observer.observe(domRef.current);
            let current = domRef.current;
            return () => (current ? observer.unobserve(current) : undefined);
        }
        return;
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
};

export default FadeIn;
