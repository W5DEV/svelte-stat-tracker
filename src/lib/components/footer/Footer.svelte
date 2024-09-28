<script>
	import AntIcon from './assets/AntIcon.svelte';
	import BeakerIcon from './assets/BeakerIcon.svelte';
	import CakeIcon from './assets/CakeIcon.svelte';
	import GraduateCapIcon from './assets/GraduateCapIcon.svelte';
	import FooterLine from './FooterLine.svelte';
</script>

<footer class="footer">
	<FooterLine />
	<div class="footerIcons">
		<CakeIcon />
		<BeakerIcon />
		<AntIcon />
		<GraduateCapIcon />
	</div>
	<ul class="footerNav">
		<li>
			<a href="https://github.com/W5DEV/" target="_blank"> Github </a>
		</li>
		<li>
			<a href="https://www.greatidea.dev/" target="_blank"> GreatIdea.dev </a>
		</li>
	</ul>
	<a href="https://www.greatidea.dev/" target="_blank" class="copy"
		>&copy; Great Idea Development {new Date().getFullYear()}</a
	>
</footer>
