export const dataMonth = {
	labels: ["January", "February", "March", "April", "May", "June"],
	datasets: [
		{
			data: [1000, 360, 500, 250, 750, 400],
			color: (opacity = 1) => `rgba(63, 61, 86, ${opacity})`,
			strokeWidth: 3,
		},
	],
	legend: ["Month Balance"],
};

export const dataWeek = {
	labels: ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"],
	datasets: [
		{
			data: [70, 85, 1400, 270, 420, 689, 100],
			color: (opacity = 1) => `rgba(63, 61, 86, ${opacity})`,
			strokeWidth: 3,
		},
	],
	legend: ["Week Balance"],
};