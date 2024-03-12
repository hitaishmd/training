export default function Button(props: buttonProps) {
    // Conditionally add the 'delete-button' class if it's the 'Delete' button
    const className = props.className + (props.deleteButton ? ' delete-button' : '');
  
    return (
      <button
        type={props.type}
        disabled={props.disabled}
        className={className}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }
  
  interface buttonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type: "button" | "submit";
    disabled: boolean;
    className: string;
    deleteButton?: boolean; // Add a new optional prop for the delete button
  }
  
  Button.defaultProps = {
    type: "button",
    disabled: false,
    className: "btn btn-primary"
  };
  