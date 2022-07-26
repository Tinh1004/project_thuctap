import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

export default function List({
  item,
  closeHandler,
  visible
}) {
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
                <Link to="/">Close</Link>
              </Button>
              <Button auto onClick={closeHandler}>
                <Link to="/">Add</Link>
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </div>
  );
}
