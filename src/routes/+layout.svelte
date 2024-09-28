<script>
	import Footer from '$lib/components/footer/Footer.svelte';
	import FooterLine from '$lib/components/footer/FooterLine.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import '../app.css';
</script>

<body>
	<Header />
	<slot />
	<Footer />
</body>
