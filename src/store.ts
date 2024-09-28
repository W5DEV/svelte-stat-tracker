export type Stat = {
	id: number;
	offensivePlayers: OffensivePlayers[];
	defensivePlayers: DefensivePlayers[];
	gameId: number;
	yards: number;
	down: number;
	playType: string;
	playDescription: string;
	timeRemaining: string;
	quarter: number;
	result: PlayResult;
};

export type Game = {
	id: number;
	homeTeam: string;
	awayTeam: string;
	homeScore: number;
	awayScore: number;
	stats: Stat[];
};

export type OffensivePlayers = {
	passerId?: number;
	receiverId?: number;
	rusherId?: number[];
	blockerId?: number[];
	fumblerId?: number[];
	tacklerId?: number[];
};

export type DefensivePlayers = {
	tacklerId?: number[];
	coverageId?: number[];
	interceptorId?: number;
	fumbleForcerId?: number[];
	fumblerId?: number[];
	fumbleRecovererId?: number[];
};

export type Player = {
	id: number;
	name: string;
	number: string;
	position: string;
	team: string;
};

export type Team = {
	id: number;
	name: string;
	players: Player[];
	wins: number;
	losses: number;
	ties: number;
	games: Game[];
};

export type PlayResult =
	| 'touchdown'
	| 'interception'
	| 'fumble'
	| 'twoPointConversion'
	| 'extraPoint'
	| 'fieldGoal'
	| 'safety'
	| 'penalty'
	| 'none';
