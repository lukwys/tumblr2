export default function fetchData() {
    const API_KEY = process.env.REACT_APP_TUMBLR_API_KEY;

    fetch(`https://api.tumblr.com/v2/blog/beakersblog.tumblr.com/posts/text?api_key=${API_KEY}`)
    .then(resp => {
        // console.log(resp);
    })
}