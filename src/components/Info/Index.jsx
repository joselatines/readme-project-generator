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
					<Title>Goals</Title>
					<Content>
						<ul>
							<li>Buy a own domain</li>
							<li>Add more badges</li>
							<li>Implement add-ons</li>
						</ul>
					</Content>
					<Button>
						<a
							href='https://paypal.me/joselatines33?country.x=VE&locale.x=es_XC'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='fa-solid fa-hand-holding-dollar'></i>Paypal
						</a>
					</Button>
				</InfoContainer>
			</div>
			<InfoContainer>
				<Title>Contribute</Title>
				<Content>
					<p>
						If you want to contribute this project by adding, fixing features
						you can make it through a pull request.
					</p>
				</Content>
				<Button>
					<a
						href='https://github.com/joselatines/readme-project-generator'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fa-solid fa-code-fork'></i>Fork
					</a>
				</Button>
			</InfoContainer>
		</Container>
	);
};

export default Info;
