import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>© 2024 Personal Finance Tracker. All rights reserved.</Copyright>
        <SocialLinks>
          <a href="https://github.com/Hitesh-Puri" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/hitesh-puri/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #e9ecef;
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Copyright = styled.p`
  margin: 0;
  padding: 10px 0;
  color: #6c757d;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #6c757d;
    transition: color 0.3s;

    &:hover {
      color: #343a40;
    }
  }
`;

export default Footer;
