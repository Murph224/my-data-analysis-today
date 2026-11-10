export interface ProductStyle {
	label: string;
	title: string;
	description: string;
	image: string;
	alt: string;
}

export const products: ProductStyle[] = [
	{
		label: "Knitwear · Soft layers",
		title: "The little bonnet",
		description: "A gentle knit for a quiet portrait and a cat who is in the mood for a close-up.",
		image: "images/beige-hat-cat.jpg",
		alt: "An orange tabby dozing in an ivory knitted hat in a cushioned bed.",
	},
	{
		label: "Knitwear · Matching set",
		title: "The hat and scarf",
		description: "A coordinated cold-weather look, best admired from a warm windowsill.",
		image: "images/hat-and-scarf-cat.jpg",
		alt: "An orange tabby wearing a pale blue knitted hat and matching scarf.",
	},
	{
		label: "Crochet · Western shape",
		title: "The tiny trailblazer",
		description: "A playful brim and a little bit of frontier spirit for the family portrait.",
		image: "images/cowboy-hat-cat.jpg",
		alt: "A black-and-white cat wearing a purple crocheted cowboy hat with a dotted band.",
	},
	{
		label: "Paper · Celebration",
		title: "The birthday cone",
		description: "For the annual portrait, the gotcha-day snapshot, or simply Tuesday.",
		image: "images/birthday-hat-cat.jpg",
		alt: "A grey cat wearing a blue paper birthday cone hat.",
	},
	{
		label: "Moodboard · Garden",
		title: "A leafy flourish",
		description: "Not a hat for sale, just a reminder that nature has excellent styling instincts.",
		image: "images/leaf-hat-cat.jpg",
		alt: "A black-and-white cat beneath a broad green leaf that rests over its head.",
	},
];