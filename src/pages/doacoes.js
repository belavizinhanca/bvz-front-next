import React from 'react'
import { Card, Button, Modal, Form } from 'react-bootstrap'
import { useState } from 'react'

import styles from '../styles/pages/doacoes.module.css'

function Demanda(props) {
    async function handleDelete(id) {
      const confirm = window.confirm("Tem certeza que deseja excluir essa demanda?");
      if (confirm) {
        await fetch(`https://bvz-back.herokuapp.com/moradores/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    }

    async function handleUpdate(id) {
      const confirm = window.confirm("Tem cereteza que deseja atualizar a demanda?")
      if(confirm){
        await fetch(`https://bvz-back.herokuapp.com/moradores/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form)
        })
      }
    }

    const [form, setForm] = useState({
      nome: '',
      perfil: '',
      demanda: ''
    })

    function handleChange({target}) {
      const {id, value} = target

      setForm({ ...form, [id]:value })
      console.log({ [id]:value })
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
      <div>
        <Modal show={show} onHide={handleClose} id={props.id}>
          <Modal.Header closeButton>
            <Modal.Title>Atualizar Demanda | {props.nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={() => handleUpdate(props.id) } className={styles.formModal}>
              <div className={styles.inputsContainerModal}>
                <Form.Group>
                    <Form.Label htmlFor="nome">Nome</Form.Label>
                    <Form.Control type="text" value={form.nome} placeholder="Atualizar Nome" id="nome" onChange={handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="perfil">Perfil</Form.Label>
                    <Form.Control type="text" value={form.perfil} placeholder="Atualizar perfil" id="perfil" onChange={handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="demanda">Demandas</Form.Label>
                    <Form.Control as="textarea" value={form.demanda} rows={4} placeholder="Atualizar demandas" id="demanda" onChange={handleChange}/>
                </Form.Group>
              </div>
                    <Button className={styles.buttonModal} atualiza type="submit">
                      Atualizar
                    </Button>

                    <Button className={styles.buttonModal, styles.cancela} onClick={handleClose}>
                      Cancelar
                    </Button>
                </Form>
          </Modal.Body>
        </Modal>

        
        <Card style={{ width: '15rem' }} id={props.id} className={styles.cardGerenciar}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{props.nome}</Card.Title>
                <Card.Text>
                {props.perfil}
                </Card.Text>
                
                <hr></hr>

                <Card.Title>Demandas</Card.Title>

                <Card.Text>
                    {props.demanda}
                </Card.Text>
                <Button
                  className={styles.buttonDelete}
                  onClick={() => handleDelete(props.id)}
                >
                  Deletar
                </Button>
                <Button className={styles.buttonUpdate} onClick={handleShow}>Atualizar</Button>
            </Card.Body>
        </Card>
      </div>

    )
}

export default Demanda;