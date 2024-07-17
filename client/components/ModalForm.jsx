import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const ModalForm = ({ isOpen, toggleModal }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const emailData = {
    to: 'ryangriego@gmail.com',
    subject: 'Received form submission from Portfolio site',
    text: `
    New Form Submission from Portfolio Site

    Name: ${name}
    Company: ${company}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}
  `
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://jly7z5uacg.execute-api.us-east-2.amazonaws.com/prod/send-email', emailData);
      console.log('Email sent:', response.data);
      setSuccessMessage('Email sent successfully!');

      // Clear form inputs after success
      setEmail('');
      setMessage('');

      // Delay closing the modal to show the success message
      setTimeout(() => {
        toggleModal();
        setSuccessMessage('');
      }, 2000); // Adjust the delay time as needed (in milliseconds)

    } catch (error) {
      console.error('Error sending email:', error);
      setSuccessMessage('Failed to send email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Talk to me</ModalHeader>
      <ModalBody>
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="company">Company</Label>
            <Input
              type="text"
              name="company"
              id="company"
              value={company}
              onChange={e => setCompany(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message</Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
          </FormGroup>
          <ModalFooter>
            <Button style={{ backgroundColor: '#1a9ba2', color: 'white' }} type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Submit'}
            </Button>{' '}
            <Button color="secondary" onClick={toggleModal} disabled={loading}>Cancel</Button>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>

  );
};

export default ModalForm;
