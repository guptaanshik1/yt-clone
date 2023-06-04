import { Button, Flex, Input } from "@chakra-ui/react";
import EmojiPicker, { Theme } from "emoji-picker-react";
import React from "react";
import { GoSmiley } from "react-icons/go";
import { IoPersonCircleSharp } from "react-icons/io5";
import useGetColorMode from "../../../hooks/useGetColorMode";

const PostComment = () => {
  const { isDark } = useGetColorMode();
  const [commentValue, setCommentValue] = React.useState<string>("");
  const [isCommentInputClicked, setIsCommentInputClicked] =
    React.useState(false);
  const [isEmojiOpen, setIsEmojiOpen] = React.useState<boolean>(false);

  const handleInputClick = () => {
    setIsEmojiOpen(false);
    setIsCommentInputClicked(true);
  };

  // @ts-ignore
  const handleEmojiClick = (emojiObject, event) => {
    setCommentValue((prev) => prev + emojiObject.emoji);
  };

  const theme = {};

  return (
    <Flex
      mt={"10px"}
      flexDir={"column"}
      position={"absolute"}
      bottom={4}
      w={"100%"}
    >
      <Flex>
        <IoPersonCircleSharp size={"44px"} color={"blue"} />
        <Input
          width={"100%"}
          placeholder={"Add a comment..."}
          border={"none"}
          value={`${commentValue}`}
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
          <Flex ml={"28px"} cursor={"pointer"} position={"relative"}>
            <GoSmiley
              size={"20px"}
              onClick={() => setIsEmojiOpen(!isEmojiOpen)}
            />
            {isEmojiOpen && (
              <div
                style={{
                  position: "absolute",
                  zIndex: 100,
                  marginLeft: "30px",
                }}
              >
                <EmojiPicker
                  autoFocusSearch
                  theme={isDark ? Theme.DARK : Theme.LIGHT}
                  onEmojiClick={handleEmojiClick}
                />
              </div>
            )}
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
