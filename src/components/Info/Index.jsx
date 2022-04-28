import { Button } from '../../shared/components';
import { Container, Content, InfoContainer, Title } from './styles';

const Info = () => {
	return (
		<Container>
			<div style={{ display: 'grid', gap: '1rem' }}>
				<InfoContainer>
					<Title>Support</Title>
					<p>
						This is a free open-source tool if you want to support this project
						make a donations through PayPal.
					</p>
				</InfoContainer>
				<InfoContainer>
					<Title>Support</Title>
					<Content>
						<ul>
							<li>Buy a own domain</li>
							<li>Implement add-ons</li>
						</ul>
					</Content>
					<Button>
						<i className='fa-solid fa-hand-holding-dollar'></i>Paypal
					</Button>
				</InfoContainer>
			</div>
			<InfoContainer>
				<Title>Contribute</Title>
				<Content>
					<p>
						If you want to contribute this project by adding, fixing, etc
						features you can make through a pull request
					</p>
				</Content>
				<Button>
					<i className='fa-solid fa-code-fork'></i>Fork
				</Button>
			</InfoContainer>
		</Container>
	);
};

export default Info;
