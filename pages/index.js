import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';
import {
	activities,
	benefitOne,
	benefitTwo,
	features,
} from '../components/data';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Cta from '../components/cta';
import Features from '../components/features';
import Activities from '../components/activities';

export default function Home() {
	return (
		<>
			<Head>
				<title>Teambuilding app</title>
				<meta name='description' content='Teambuilding app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />
			<Hero />
			<br/><br/>
			{/*<SectionTitle
				pretitle='Main features'
				title=' Why should you use our solution'>
				Say goodbye to mundane team-building exercises. Our solution offers a
				range of powerful features that will transform your team dynamics and
				drive success.
	</SectionTitle>*/}
			<Benefits data={benefitOne} />
			{/*<Benefits imgPos='right' data={benefitTwo} />*/}
			<SectionTitle pretitle='' title='Components used in the project'>
			</SectionTitle>
			<Features data={features} />
			{/*<SectionTitle
				pretitle='Engaging Activities'
				title='Designed based on your team goals'>
				Experience a curated collection of uniquely designed activities tailored
				to your team's specific needs and goals. Introverts and extroverts will
				be happy.
	</SectionTitle>*/}
			{/*<Activities data={activities} />*/}
			<Cta />
			<Footer />
		</>
	);
}
