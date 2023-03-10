import Search from "./page";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<div className="flex space-x-4 divide-x-2 p-5">
				<h1>Search</h1>
			</div>
			<div className="flex-1 pl-5">
				<Search />
				<div>{children}</div>
			</div>
		</main>
	);
}
