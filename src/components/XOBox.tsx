interface Props {
    onPress : () => void;
    value : string;
}

function XOBox({onPress, value}:Props) {
    return <button className="XOBox" onClick={onPress}>{value}</button>
}

export default XOBox