import { useRouter } from 'next/navigation';
import Button from './Button';
import { graphql } from 'relay-runtime';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';
import { useLazyLoadQuery } from 'react-relay';
import { LoginButtonSectionQuery } from './__generated__/LoginButtonSectionQuery.graphql';
export default function LoginButtonSection(): JSX.Element {
	const router = useRouter();
	const { username } = useContext(AuthContext);
	if (username != null && username != '') {
		return <LoggedInSection />;
	}

	return (
		<div className='flex gap-4'>
			<Button
				variant='secondary'
				label='Log in'
				onClick={() => router.push('/login')}
			/>
			<Button
				variant='secondary'
				label='Sign up'
				onClick={() => router.push('/register')}
			/>
		</div>
	);
}

const QUERY = graphql`
	query LoginButtonSectionQuery($password: String!, $username: String!) {
		genUser(password: $password, username: $username) @required(action: THROW) {
			id
			firstName
			lastName
		}
	}
`;

function LoggedInSection(): JSX.Element {
	const { username, password, setAuth } = useContext(AuthContext);
	const data = useLazyLoadQuery<LoginButtonSectionQuery>(QUERY, {
		username,
		password,
	});
	const { firstName, lastName } = data.genUser;
	return (
		<div className='flex gap-4'>
			<div>
				Hello {firstName} {lastName}{' '}
			</div>
			<div
				className='underline text-white-700'
				onClick={() => {
					setAuth('', '');
				}}
			>
				{' '}
				Log out
			</div>
		</div>
	);
}
