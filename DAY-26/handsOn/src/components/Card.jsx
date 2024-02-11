const Card = (props) => {
    return (
        <div>
            <h1>{props?.item?.name}</h1>
            <p>{props?.item?.age}</p>
            <p>{props?.item?.address}</p>
        </div>
    );
};
export default Card;
