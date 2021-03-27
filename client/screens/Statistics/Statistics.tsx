import React, { useState, FC } from "react";
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from '@react-navigation/native';
import { Text, View, Dimensions, ScrollView } from "react-native";
import { Button, Appbar } from "react-native-paper";
import { dataMonth, dataWeek } from "./data";
import styles from "./styles";

const screenWidth = Dimensions.get("window").width - 16;

const chartConfig = {
	backgroundColor: "#1cc910",
	backgroundGradientFrom: "#eff3ff",
	backgroundGradientTo: "#efefef",
	decimalPlaces: 2, // optional, defaults to 2dp
	color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
	style: {
		borderRadius: 16,
	},
};

const Statistics: FC = () => {
	const [chart, setChart] = useState<boolean>(true);
	const navigation = useNavigation();

	const LineMonth = () => (
		<LineChart
			data={dataMonth}
			width={screenWidth}
			height={220}
			yAxisLabel="$"
			chartConfig={chartConfig}
			bezier
			style={styles.charts}
		/>
	);

	const LineWeek = () => (
		<LineChart
			data={dataWeek}
			width={screenWidth}
			height={220}
			yAxisLabel="$"
			chartConfig={chartConfig}
			bezier
			style={styles.charts}
		/>
	);

	const handleChart = (v: boolean) => {
		setChart(v);
	};

	return (
		<>
			<Appbar.Header style={{backgroundColor: "#4a47a3"}}>
				<Appbar.BackAction 
				onPress={() => navigation.navigate('Menu')} 
				/>
			</Appbar.Header>

			<ScrollView>
				<View style={styles.root}>
					<View>
						<Text style={styles.title}>Statistics</Text>
					</View>
					<View style={styles.buttonsContainer}>
						<Button
							style={styles.button}
							compact
							color="#413C69"
							mode="text"
							onPress={() => handleChart(true)}
						>
							Month
						</Button>
						<Button
							style={styles.button}
							compact
							color="#413C69"
							mode="text"
							onPress={() => handleChart(false)}
						>
							Week
						</Button>
					</View>
					<View style={{ alignSelf: "center" }}>
						{chart ? <LineMonth /> : <LineWeek />}
					</View>

					<View style={styles.list}>
						<Text
							style={{
								paddingHorizontal: 10,
								color: "#413C69",
								fontWeight: "bold",
								textDecorationLine: "underline",
							}}
						>
							Spendings:{" "}
						</Text>
						{chart ? (
							<View style={styles.itemsContainer}>
								<View>
									{dataMonth.labels.map((l) => (
										<Text style={styles.listItem} key={l}>
											{l}
										</Text>
									))}
								</View>
								<View>
									{dataMonth.datasets[0].data.map((d) => (
										<Text style={styles.listItem} key={d}>
											${d}
										</Text>
									))}
								</View>
							</View>
						) : (
							<View style={styles.itemsContainer}>
								<View>
									{dataWeek.labels.map((l) => (
										<Text style={styles.listItem} key={l}>
											{l}
										</Text>
									))}
								</View>
								<View>
									{dataWeek.datasets[0].data.map((d) => (
										<Text style={styles.listItem} key={d}>
											${d}
										</Text>
									))}
								</View>
							</View>
						)}
					</View>
				</View>
			</ScrollView>
		</>
	);
};

export default Statistics;
