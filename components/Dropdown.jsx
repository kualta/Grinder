import { useRef } from "react";

const Dropdown = ({ className, children }) => {
    const dropdown = useRef(null);
    const handleClick = () => {
        dropdown.current.classList.toggle("dropdown-open");
        document.activeElement.blur();
    };

    return (
        <div className={className} ref={dropdown}>
            <div tabIndex={0} className="" onClick={handleClick}>
                {children}
            </div>
        </div>
    );
}

export default Dropdown;