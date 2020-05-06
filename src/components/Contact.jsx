import React from 'react';

const Contact = ({avatar, name, phone, country, admissionDate, company, department}) => {

  const formatDate = (date) => new Intl.DateTimeFormat('pt-BR').format(new Date(date));

  return (
    <article className="contact" data-testid="contact">
      <span className="contact__avatar" data-testid="contact-avatar">
        <img src={avatar} alt={name} />
      </span>

      <span className="contact__data" data-testid="contact-name">
        {name}
      </span>

      <span className="contact__data" data-testid="contact-phone">
        {phone}
      </span>

      <span className="contact__data" data-testid="contact-country">
        {country}
      </span>

      <span className="contact__data" data-testid="contact-admissionDate">
        {formatDate(admissionDate)}
      </span>

      <span className="contact__data" data-testid="contact-company">
        {company}
      </span>

      <span className="contact__data" data-testid="contact-department">
        {department}
      </span>
    </article>
  );
}

export default Contact;