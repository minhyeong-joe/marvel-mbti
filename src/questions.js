export const questionTypes = {
	IvsE: "IvsE",
	SvsN: "SvsN",
	TvsF: "TvsF",
	JvsP: "JvsP",
};

export const questions = [
	{
		type: questionTypes.IvsE,
		prompt: {
			kr: "나는...",
		},
		optionA: {
			kr: "혼자서 일하는 것을 선호한다.",
			score: -1,
		},
		optionB: {
			kr: "팀과 협력하는 것을 선호한다.",
			score: 1,
		},
	},
	{
		type: questionTypes.IvsE,
		prompt: {
			kr: "협동이 필요할때 나는...",
		},
		optionA: {
			kr: "최소한의 정보만 공유한다.",
			score: -1,
		},
		optionB: {
			kr: "다른 히어로들과 되도록 많이 교류한다.",
			score: 1,
		},
	},
	{
		type: questionTypes.IvsE,
		prompt: {
			kr: "나는 의견 제시 후에...",
		},
		optionA: {
			kr: "괜히 말했다 생각하고 후회한다.",
			score: -1,
		},
		optionB: {
			kr: "내 생각을 다 말 하지 못한 것 같아 아쉬워한다.",
			score: 1,
		},
	},
	{
		type: questionTypes.IvsE,
		prompt: {
			kr: "적의 계략에 빠졌을때 나는...",
		},
		optionA: {
			kr: "일단 할수있는 행동을 하며 방법을 모색한다.",
			score: 1,
		},
		optionB: {
			kr: "방법을 충분히 모색한 뒤 행동을 개시한다.",
			score: -1,
		},
	},
	{
		type: questionTypes.IvsE,
		prompt: {
			kr: "세상에 자신을 드러내는 것을...",
		},
		optionA: {
			kr: "즐기고 원한다.",
			score: 1,
		},
		optionB: {
			kr: "두려워한다.",
			score: -1,
		},
	},
	{
		type: questionTypes.SvsN,
		prompt: {
			kr: "적들과의 충돌시...",
		},
		optionA: {
			kr: "기존의 전통적인 슈퍼 히어로 방식을 따른다.",
			score: -1,
		},
		optionB: {
			kr: "나만의 색다른 방식으로 적들에게 맞선다.",
			score: 1,
		},
	},
	{
		type: questionTypes.SvsN,
		prompt: {
			kr: "적의 아지트를 찾을때...",
		},
		optionA: {
			kr: "적의 패턴을 분석하고 이를 토대로 찾는다.",
			score: -1,
		},
		optionB: {
			kr: "나의 히어로 직감에 의존하여 찾는다.",
			score: 1,
		},
	},
	{
		type: questionTypes.SvsN,
		prompt: {
			kr: "다른 히어로들과 있을때...",
		},
		optionA: {
			kr: "나는 의견을 제시하는 쪽이다.",
			score: 1,
		},
		optionB: {
			kr: "나는 의견을 물어보고 검토하는 쪽이다.",
			score: -1,
		},
	},
	{
		type: questionTypes.SvsN,
		prompt: {
			kr: "나는...",
		},
		optionA: {
			kr: "조직에 소속되어 구체적인 지시를 받는 것을 선호한다.",
			score: -1,
		},
		optionB: {
			kr: "어디에도 소속되지 않는 자유로운 자경대를 선호한다.",
			score: 1,
		},
	},
	{
		type: questionTypes.SvsN,
		prompt: {
			kr: "적과의 전투중 나는...",
		},
		optionA: {
			kr: "주위 모든 세부사항을 관찰하고 분석한다.",
			score: -1,
		},
		optionB: {
			kr: "전체적인 상황을 이해하고 분석한다.",
			score: 1,
		},
	},
	{
		type: questionTypes.TvsF,
		prompt: {
			kr: "두 사람을 모두 구하기는 어려운 상황, 나는...",
		},
		optionA: {
			kr: "조금 냉정하더라도 더 늦기전에 결단을 내려 한명을 구한다.",
			score: -1,
		},
		optionB: {
			kr: "최대한 모두를 구할수있는 방법을 생각하다 어렵게 결정을 내린다.",
			score: 1,
		},
	},
	{
		type: questionTypes.TvsF,
		prompt: {
			kr: "절대악에 대해 나는...",
		},
		optionA: {
			kr:
				"적에게도 어떠한 이유가 있을 것이므로 기회가 되면 들어보고 이해하려 노력한다.",
			score: 1,
		},
		optionB: {
			kr: "악은 정당화 될 수 없으므로 모든 방법을 동원해 악을 처단한다.",
			score: -1,
		},
	},
	{
		type: questionTypes.TvsF,
		prompt: {
			kr: "시민들에게 나는...",
		},
		optionA: {
			kr: "강하고 능력있는 히어로로 인식되고 싶다.",
			score: -1,
		},
		optionB: {
			kr: "친근하고 선한 히어로로 인식되고 싶다.",
			score: 1,
		},
	},
	{
		type: questionTypes.TvsF,
		prompt: {
			kr: "나의 정신적 멘토에게...",
		},
		optionA: {
			kr: '"잘했어!" 라는 말을 듣고싶다.',
			score: -1,
		},
		optionB: {
			kr: '"고생했어" 라는 말을 듣고싶다.',
			score: 1,
		},
	},
	{
		type: questionTypes.TvsF,
		prompt: {
			kr: "어려움을 겪고 있는 동료 히어로에게...",
		},
		optionA: {
			kr: "공감하며 위로해준다.",
			score: 1,
		},
		optionB: {
			kr: "방법을 제시하며 해결해주려 노력한다.",
			score: -1,
		},
	},
	{
		type: questionTypes.JvsP,
		prompt: {
			kr: "시간 약속을 어기면...",
		},
		optionA: {
			kr: "약속을 어긴 사람에게 신뢰가 떨어진다.",
			score: -1,
		},
		optionB: {
			kr: "약속을 지킬 수 없었던 이유를 물어본다.",
			score: 1,
		},
	},
	{
		type: questionTypes.JvsP,
		prompt: {
			kr: "작전을 구상할때...",
		},
		optionA: {
			kr: "구체적인 시간 단위로 계획한다.",
			score: -1,
		},
		optionB: {
			kr: "널널하게 유동적으로 계획한다.",
			score: 1,
		},
	},
	{
		type: questionTypes.JvsP,
		prompt: {
			kr: "나의 히어로 장비들은...",
		},
		optionA: {
			kr: "항상 잘 정리되어있으며, 그렇지 않으면 불편하다.",
			score: -1,
		},
		optionB: {
			kr: "잘 정리되어 있지는 않지만, 찾는데는 무리없다.",
			score: 1,
		},
	},
	{
		type: questionTypes.JvsP,
		prompt: {
			kr: "히어로 연맹에서 나를 스카웃하려할때...",
		},
		optionA: {
			kr: "연맹에 소속되어 정해진 규칙 밑에서 잘 적응한다.",
			score: -1,
		},
		optionB: {
			kr: "소속되지않고 자유로운 곳에서 내 능력을 더 뽐낼 수 있다.",
			score: 1,
		},
	},
	{
		type: questionTypes.JvsP,
		prompt: {
			kr: "시간이 모자른 절체절명의 순간, 나는...",
		},
		optionA: {
			kr: "시간이 좀 더 걸리더라도 더 완벽하게 임무를 수행하는 것이 중요하다.",
			score: 1,
		},
		optionB: {
			kr:
				"완벽하게 수행하지 못하더라도 시간 내에 임무를 마무리하는 것이 중요하다.",
			score: -1,
		},
	},
];
