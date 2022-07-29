import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { useDispatch } from 'react-redux';
import userSlice from "../../redux/userSlice/userSlice";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function List({
  item,
  closeHandler,
  visible
}) {
  const [inputName, setInputName] = useState("");
  const dispatch = useDispatch();
  const handleAddPlaylist = () => {
    const id = uuidv4();
    dispatch(userSlice.actions.addPlayList({
      name: inputName,
      discription: "Diviners",
      id: id,
      image: "https://i.scdn.co/image/ab67616d0000b273da513d25e8b3cdd4f43f7512",
      array: []
    }))
  }
  return (
    <div>
      <span className="text nav-text">
        {item ? item.title : ""}
      </span>
      <div >
        <Modal
          background-color="red"
          closeButton
          preventClose
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >

          <Text b size={20}>Tạo PlayList mới </Text>
          <Modal.Body>
            <Input
              size="lg"
              placeholder="Nhập tên PlayList"
              onChange={(e) => {
                setInputName(e.target.value);
              }}
            // contentLeft={<Mail fill="currentColor" />}
            />
            <Checkbox>
              <div class="a">Công khai
                <Text size={14}>Mọi người có thể nhìn thấy PlayList này</Text>
              </div>
            </Checkbox>

            <Checkbox>
              <div class="a">Phát ngẫu nhiên
                <Text size={14}>Luôn phát ngẫu nhiên những bài hát này</Text></div>
            </Checkbox>
            <Row justify="space-between">
            </Row>
          </Modal.Body>
          <div>
            <Modal.Footer className="o">
              <Button auto flat color="error" onClick={closeHandler}>
                Close
              </Button>
              <Button auto onClick={() => {
                handleAddPlaylist();
                closeHandler();
              }}>
                Add
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </div>
  );
}
