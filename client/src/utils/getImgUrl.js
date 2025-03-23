function getImgUrl (name) {
    return new URL(`../assets/campaigns/${name}`, import.meta.url)
}

export {getImgUrl}