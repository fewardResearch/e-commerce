export default interface IInput {
    type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "url" | "week";
    placeholder?: string;
    className?: string;
    id?: string;
    xSize?: number;
    ySize?: number;
    value?: string | number;
    weight?: "bold" | "semibold" | "medium" | "normal" | "light" | "normal";
    fontSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
    uppercase?: boolean;
    borderRadius?: "none" | "normal" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    textColor?: "transparent" | "current" | "black" | "white" |
    "gray-50" | "gray-100" | "gray-200" | "gray-300" | "gray-400" | "gray-500" | "gray-600" | "gray-700" | "gray-800" | "gray-900" |
    "red-50" | "red-100" | "red-200" | "red-300" | "red-400" | "red-500" | "red-600" | "red-700" | "red-800" | "red-900" |
    "yellow-50" | "yellow-100" | "yellow-200" | "yellow-300" | "yellow-400" | "yellow-500" | "yellow-600" | "yellow-700" | "yellow-800" | "yellow-900" | 
    "green-50" | "green-100" | "green-200" | "green-300" | "green-400" | "green-500" | "green-600" | "green-700" | "green-800" | "green-900" | 
    "blue-50" | "blue-100" | "blue-200" | "blue-300" | "blue-400" | "blue-500" | "blue-600" | "blue-700" | "blue-800" | "blue-900" | 
    "indigo-50" | "indigo-100" | "indigo-200" | "indigo-300" | "indigo-400" | "indigo-500" | "indigo-600" | "indigo-700" | "indigo-800" | "indigo-900" |
    "purple-50" | "purple-100" | "purple-200" | "purple-300" | "purple-400" | "purple-500" | "purple-600" | "purple-700" | "purple-800" | "purple-900" |
    "pink-50" | "pink-100" | "pink-200" | "pink-300" | "pink-400" | "pink-500" | "pink-600" | "pink-700" | "pink-800" | "pink-900";
    bgColor?: "transparent" | "current" | "black" | "white" |
    "gray-50" | "gray-100" | "gray-200" | "gray-300" | "gray-400" | "gray-500" | "gray-600" | "gray-700" | "gray-800" | "gray-900" |
    "red-50" | "red-100" | "red-200" | "red-300" | "red-400" | "red-500" | "red-600" | "red-700" | "red-800" | "red-900" |
    "yellow-50" | "yellow-100" | "yellow-200" | "yellow-300" | "yellow-400" | "yellow-500" | "yellow-600" | "yellow-700" | "yellow-800" | "yellow-900" | 
    "green-50" | "green-100" | "green-200" | "green-300" | "green-400" | "green-500" | "green-600" | "green-700" | "green-800" | "green-900" | 
    "blue-50" | "blue-100" | "blue-200" | "blue-300" | "blue-400" | "blue-500" | "blue-600" | "blue-700" | "blue-800" | "blue-900" | 
    "indigo-50" | "indigo-100" | "indigo-200" | "indigo-300" | "indigo-400" | "indigo-500" | "indigo-600" | "indigo-700" | "indigo-800" | "indigo-900" |
    "purple-50" | "purple-100" | "purple-200" | "purple-300" | "purple-400" | "purple-500" | "purple-600" | "purple-700" | "purple-800" | "purple-900" |
    "pink-50" | "pink-100" | "pink-200" | "pink-300" | "pink-400" | "pink-500" | "pink-600" | "pink-700" | "pink-800" | "pink-900";
    borderColor?: "transparent" | "current" | "black" | "white" |
    "gray-50" | "gray-100" | "gray-200" | "gray-300" | "gray-400" | "gray-500" | "gray-600" | "gray-700" | "gray-800" | "gray-900" |
    "red-50" | "red-100" | "red-200" | "red-300" | "red-400" | "red-500" | "red-600" | "red-700" | "red-800" | "red-900" |
    "yellow-50" | "yellow-100" | "yellow-200" | "yellow-300" | "yellow-400" | "yellow-500" | "yellow-600" | "yellow-700" | "yellow-800" | "yellow-900" | 
    "green-50" | "green-100" | "green-200" | "green-300" | "green-400" | "green-500" | "green-600" | "green-700" | "green-800" | "green-900" | 
    "blue-50" | "blue-100" | "blue-200" | "blue-300" | "blue-400" | "blue-500" | "blue-600" | "blue-700" | "blue-800" | "blue-900" | 
    "indigo-50" | "indigo-100" | "indigo-200" | "indigo-300" | "indigo-400" | "indigo-500" | "indigo-600" | "indigo-700" | "indigo-800" | "indigo-900" |
    "purple-50" | "purple-100" | "purple-200" | "purple-300" | "purple-400" | "purple-500" | "purple-600" | "purple-700" | "purple-800" | "purple-900" |
    "pink-50" | "pink-100" | "pink-200" | "pink-300" | "pink-400" | "pink-500" | "pink-600" | "pink-700" | "pink-800" | "pink-900";
    letterSpacing?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
    border?: 0 | 1 | 2 | 4 | 8;
    onChange?: () => void;
    onClick?: () => void;
    onDoubleClick?: () => void;
    onKeyUp?: () => void;
    onKeyDown?: () => void;
    onKeyPress?: () => void;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onBlur?: () => void;
    onFocus?: () => void;
    onSubmit?: () => void;
}