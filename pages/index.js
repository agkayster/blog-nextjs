import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
{
	/* imported getSortedPostsData, this is where we fetched our external File system data*/
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData(); // We assigned the "getSortedPostsData()" function to a variable
	return {
		props: {
			allPostsData, // called the "allPostsData" variable which holds the "getSortedPostsData" function in the props object
		},
	};
}

let Home;

export default Home = ({ allPostsData }) => {
	// Here we destructured "props" and passed in {allPostsData}
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hello I am Ejike. A software developer and a believer in
					people
				</p>
				<p>
					(This is a sample website - you’ll be building a site like
					this on{' '}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>
					.)
				</p>
			</section>
			{/* Add this <section> tag below the existing <section> tag */}
			<section
				className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}> Blog</h2>
				<ul className={utilStyles.list}>
					{/*Below we are using the map method to loop through the allPostsData array and bring out the title, id and date in a list item format */}
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								{' '}
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
};
