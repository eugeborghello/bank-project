import React, { useState, useEffect } from "react";
import {
	LineChart,
	BarChart
} from "react-native-chart-kit";
import { Text, View, Dimensions, ScrollView } from "react-native";
import { List, Button } from "react-native-paper";
import styles from "./styles";

const screenWidth = Dimensions.get("window").width;

const data = {
	labels: ["January", "February", "March", "April", "May", "June"],
	datasets: [
		{
			data: [1000, 360, 500, 250, 750, 400],
			color: (opacity = 1) => `rgba(63, 61, 86, ${opacity})`,
			strokeWidth: 2, // optional
		},
	]
};

const chartConfig = {
	backgroundGradientFrom: "#4A47A3",
	backgroundGradientFromOpacity: 0,
	backgroundGradientTo: "#709FB0",
	backgroundGradientToOpacity: 1,
	color: (opacity = 1) => `rgba(65, 60, 150, ${opacity})`,
	strokeWidth: 2,
	barPercentage: 0.5,
	useShadowColorFromDataset: false,
};

const Statistics = () => {
	const [chart, setChart] = useState<boolean>(false);

	const Line = () => (
		<LineChart
			data={data}
			width={screenWidth}
			height={300}
			yAxisLabel="$"
			chartConfig={chartConfig}
			verticalLabelRotation={30}
			bezier
		/>
	);

	const Bar = () => (
		<BarChart
			data={data}
			width={screenWidth}
			height={300}
			yAxisLabel="$"
			yAxisSuffix=""
			chartConfig={chartConfig}
			verticalLabelRotation={30}
		/>
	);

	const handleChart = (v) => {
		setChart(v);
	};
    
	return (
		<ScrollView>
			<View style={styles.root}>
				<View>
					<Text style={styles.title}>Your general balance</Text>
				</View>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
                        justifyContent: 'center',
					}}
				>
					<Button
						style={{ width: "30%", margin: 5 }}
						compact
						color="#413C69"
						mode="outlined"
						onPress={() => handleChart(true)}
					>
						Line chart
					</Button>
					<Button
						style={{ width: "30%", margin: 5 }}
						compact
						color="#413C69"
						mode="outlined"
						onPress={() => handleChart(false)}
					>
						Bar chart
					</Button>
				</View>
				<View>{chart ? <Line /> : <Bar />}</View>
				<View style={styles.list}>
					{data.labels.map((l) => (
						<List.Item
							key={l}
							title={l}
							right={(props) => <Text {...props}>$0.00</Text>}
							style={styles.listItem}
						/>
					))}
				</View>
			</View>
		</ScrollView>
	);
};

export default Statistics;
