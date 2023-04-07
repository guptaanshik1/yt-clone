import { Button, Flex, Input } from "@chakra-ui/react";
import EmojiPicker, { Theme } from "emoji-picker-react";
import React from "react";
import { GoSmiley } from "react-icons/go";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useAppDispatch } from "../../../../app/hooks";
import {
  clearCommentIds,
  removeCommentId,
} from "../../../../features/replySlice";
import useGetColorMode from "../../../../hooks/useGetColorMode";

interface IProps {
  currentlySelectedCommentId: string;
}

const PostReply = ({ currentlySelectedCommentId }: IProps) => {
  const { isDark } = useGetColorMode();
  const [commentValue, setCommentValue] = React.useState<string>("");
  const [isEmojiOpen, setIsEmojiOpen] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleInputClick = () => {
    setIsEmojiOpen(true);
  };

  // @ts-ignore
  const handleEmojiClick = (emojiObject, event) => {
    setCommentValue((prev) => prev + emojiObject.emoji);
  };

  return (
    <Flex mt={"10px"} flexDir={"column"}>
      <Flex>
        <IoPersonCircleSharp size={"44px"} color={"blue"} />
        <Input
          width={"100%"}
          placeholder={"Add a reply..."}
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
                autoFocusSearch={false}
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
            width={"50%"}
            bgColor={"#FFFFFF"}
            color={"#0e0f0f"}
            _hover={{ bgColor: "lightgray" }}
            borderRadius={"full"}
            onClick={() => {
              dispatch(removeCommentId(currentlySelectedCommentId));
              setCommentValue("");
            }}
          >
            Cancel
          </Button>
          <Button
            fontWeight={700}
            width={"50%"}
            bgColor={commentValue.length <= 0 ? "lightgray" : "#085ed4"}
            color={commentValue.length <= 0 ? "#0e0f0f" : "#FFFFFF"}
            _hover={{ opacity: 0.9 }}
            borderRadius={"full"}
            isDisabled={commentValue.length <= 0}
          >
            Reply
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PostReply;
