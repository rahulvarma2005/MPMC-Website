import React from 'react';
import Container from './container';

export default function Cta() {
	return (
		<Container>
			<div className='flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-primaryPurple px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl'>
				<div className='flex-grow text-center lg:text-center'>
					<h2 className='text-2xl font-medium lg:text-3xl'>
						TEAM:
					</h2>
					<p className='mt-2 font-medium text-white text-opacity-95 lg:text-xl'>
					Divas Upadhyay - 21BCE2222<br/>
					Ishti Chaudhary - 22BCB0238<br/>
					Mudunuri Rahul Varma - 22BCI0091<br/>
					Saket Dwaraka Bhamidipaati - 22BCE2180<br/>
					Saptarshi Mahapatra - 22BCE3201<br/>
					</p>
				</div>
			</div>
		</Container>
	);
}
