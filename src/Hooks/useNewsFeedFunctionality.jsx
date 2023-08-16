import axios from "axios";
import usePosts from "./usePosts";
import Swal from "sweetalert2";

const useNewsFeedFunctionality = () => {
    const [, refetch] = usePosts();
    //   for react react 
    const handleReact = (id, email) => {
        const addReact = { id, email }
        axios.patch("https://insight-space-server.vercel.app/reacts", addReact)
            .then(data => {
                if (data) {
                    refetch()
                }
            })
            .catch(err => console.log(err.message))
    };
    // for add bookmarks
    const handleBookMark = (id, email) => {
        const addBookMark = { postId: id, email }
        axios.post("https://insight-space-server.vercel.app/book-marks", addBookMark)
            .then(data => {
                if (data) {
                    refetch()
                    Swal.fire(
                        'Success!',
                        'This Question save on your collections.',
                        'success'
                    )
                }
            })
            .catch(err => console.log(err.message))
    };
    // for add comments 
    const handleAddComment = (p, user, ref) => {
        const comment = ref.current.value;
        const newComment = { comment, postId: p._id, email: user.email, displayName: user.displayName, photoURL: user.photoURL }
        axios.patch("https://insight-space-server.vercel.app/comment", newComment)
            .then(data => {
                if (data) {
                    refetch()
                }
            })
            .catch(err => console.log(err.message))
    }

    return [handleReact, handleBookMark, handleAddComment]
};

export default useNewsFeedFunctionality;