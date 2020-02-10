const getId = (url) => {
    const lastDotPos = url.lastIndexOf('.');
    const itemId = url.substring(lastDotPos + 1);

    const sub = url.substring(0, lastDotPos);
    const shopId = sub.substring(sub.lastIndexOf('.') + 1);

    return { itemId, shopId };
}

export default getId;