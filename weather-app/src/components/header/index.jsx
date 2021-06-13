import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import './index.css';

const Header = () => (
  <Menu fixed="top" inverted stackable>
    <Container>
      <Menu.Item as="a" header href="https://creatureoftech.com">
        <div>
          <div>
            <Image
              className="logo-cot"
              size="mini"
              src="https://www.creatureoftech.com/static/0d8a4899290805e294472a0e5265d5af/d8419/favicon-96x96.png"
            />
          </div>
          <div>
            <span className="title">Creature of Tech&nbsp;</span>
            <span className="sub-title">Adventures in bits and bytes</span>
          </div>
        </div>
      </Menu.Item>
    </Container>
  </Menu>
);

export default Header;
