import React from 'react';

const Form = () => {
	const [fname, setFname] = React.useState('');
	const [lname, setLname] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [day, setDay] = React.useState('');
	const [year, setYear] = React.useState('');
	const [month, setMonth] = React.useState('');

	const [error, setError] = React.useState(null);

	const submitHandler = e => {
		e.preventDefault();
		console.log(`https://atologistinfotech.com/api/register.php?fname=${fname}&lname=${lname}&email=${email}&password=${password}&day=${day}&year=${year}&month=${month}`)

		const sendForm = async () => {
			try{
				const res = await fetch(`/api/register.php?fname=${fname}&lname=${lname}&email=${email}&password=${password}&day=${day}&year=${year}&month=${month}`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					}
				});
				console.log(res)
				if(!res.ok) throw new Error(`something went wrong`);
				const data = await res.json();
				console.log(data)
			}catch(err){
				console.error(`${err.message}`);
				setError(err.message)
			}
		};
		sendForm();
	}

	return <div class="wrapper">
		<h3 className="heading-3">Sign up</h3>
		<form className="form" onSubmit={submitHandler}>
			<input type="text" onChange={e => setFname(e.target.value)} className="input" placeholder="First Name" />
			<input type="text" onChange={e => setLname(e.target.value)} className="input" placeholder="Last Name" />
			<input type="email" onChange={e => setEmail(e.target.value)} className="input" placeholder="Email" />
			<input type="password" onChange={e => setPassword(e.target.value)} className="input" placeholder="Password" />
			<select onChange={e => setMonth(e.target.value)} className="input">
				<option value="default">select</option>
				<option value="jan">January</option>
			</select>
			<input type="text" onChange={e => setDay(e.target.value)} className="input" placeholder="Day" />
			<input type="text" onChange={e => setYear(e.target.value)} className="input" placeholder="Year" />
			<button type="submit" className="btn">Sign Up</button>	
		</form>
	</div>
};


export default Form;