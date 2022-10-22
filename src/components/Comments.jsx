import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { axiosInstance } from "../config";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  font-size: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;

  &:focus {
    border-bottom: 1px solid black;
  }
`;

const CommentButton = styled.button`
  background-color: blue;
  font-weight: 500;
  color: white;
  border-radius: 3px;
  border: none;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);
  const [desc, setDesc] = useState("");

  const postComments = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/comments", { desc, videoId });
      setDesc("");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };


  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axiosInstance.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);
  return (
    <>
      <Container>
        <NewComment>
          <Avatar src={currentUser?.img} />
          <Input
            placeholder="Add a comment"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <CommentButton onClick={postComments}>Comment</CommentButton>
        </NewComment>
      </Container>
      <Container>
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </Container>
    </>
  );
};

export default Comments;
