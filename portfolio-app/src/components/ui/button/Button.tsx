import "./button.css";

interface ButtonProps {
    onClick: () => void;
    buttonText: string;
};

export default function Button({ onClick, buttonText }: ButtonProps) {
    return (
        <button className="button" onClick={onClick}>{buttonText}</button>
    );
};