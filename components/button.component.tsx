import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: 'btn_dark_green' | 'btn_light_green';
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
    return (
        <button
            className={`flexCenter ${variant} gap-3 rounded-full border`}
            type={type}>
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label className="bold-16 whitespace-nowrap">{title}</label>
        </button>
    )
}

export default Button