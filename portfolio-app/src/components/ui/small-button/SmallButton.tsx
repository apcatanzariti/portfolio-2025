import "./smallButton.css";

interface SmallButtonProps {
    onClick: () => void;
    buttonText: string;
};

export default function SmallButton({ onClick, buttonText }: SmallButtonProps) {
    return (
        <button className="small-button" onClick={onClick}>{buttonText}</button>
    );
};