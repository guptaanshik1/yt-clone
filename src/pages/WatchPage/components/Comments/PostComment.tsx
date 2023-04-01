import { Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { GoSmiley } from "react-icons/go";
import { IoPersonCircleSharp } from "react-icons/io5";

const PostComment = () => {
  const [commentValue, setCommentValue] = React.useState<string>("");
  const [isCommentInputClicked, setIsCommentInputClicked] =
    React.useState(false);
  const handleInputClick = () => {
    setIsCommentInputClicked(true);
  };

  return (
    <Flex mt={"10px"} flexDir={"column"}>
      <Flex>
        <IoPersonCircleSharp size={"44px"} color={"blue"} />
        <Input
          width={"100%"}
          placeholder={"Add a comment..."}
          border={"none"}
          value={commentValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCommentValue(e.target.value)
          }
          borderBottom={"1px solid gray"}
          borderRadius={"0"}
          _focus={{
            boxShadow: "none",
            border: "none",
            borderBottom: "1px solid gray",
          }}
          _hover={{ outline: "none", borderBottom: "1px solid black" }}
          onClick={() => handleInputClick()}
        />
      </Flex>

      {isCommentInputClicked && (
        <Flex m={"10px"} justifyContent={"space-between"} alignItems={"center"}>
          <Flex ml={"28px"} cursor={"pointer"}>
            <GoSmiley size={"20px"} />
          </Flex>
          <Flex>
            <Button
              mr={"10px"}
              fontWeight={700}
              bgColor={"#FFFFFF"}
              color={"#0e0f0f"}
              _hover={{ bgColor: "lightgray" }}
              borderRadius={"full"}
              onClick={() => {
                setIsCommentInputClicked(false);
                setCommentValue("");
              }}
            >
              Cancel
            </Button>
            <Button
              fontWeight={700}
              bgColor={commentValue.length <= 0 ? "lightgray" : "#085ed4"}
              color={commentValue.length <= 0 ? "#0e0f0f" : "#FFFFFF"}
              _hover={{ opacity: 0.9 }}
              borderRadius={"full"}
              isDisabled={commentValue.length <= 0}
            >
              Comment
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default PostComment;
