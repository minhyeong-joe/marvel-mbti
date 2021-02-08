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
		type: questionTypes.JvsP,
		prompt: {
			kr: "계획을 짜야 할때...",
		},
		optionA: {
			kr: "구체적인 시간 단위로 계획해야 효율이 높아진다.",
			score: -1,
		},
		optionB: {
			kr: "널널하게 짜는 편이며, 시간을 유동적으로 활용할때 효율이 높아진다.",
			score: 1,
		},
	},
	{
		type: questionTypes.IvsE,
		prompt: {
			kr: "직장이나 학교에서...",
		},
		optionA: {
			kr: "되도록 말을 줄이고 먼저 말 걸지 않는다.",
			score: -1,
		},
		optionB: {
			kr: "동료나 친구와 되도록 많이 대화하려 하며 잡담을 즐긴다.",
			score: 1,
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
		type: questionTypes.IvsE,
		prompt: {
			kr: "나의 의견을 말하고 난 뒤...",
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
		type: questionTypes.JvsP,
		prompt: {
			kr: "시간이 조금 부족할 때, 나는...",
		},
		optionA: {
			kr: "시간이 좀 더 걸리더라도 더 완벽하게 임무를 수행하려고 노력한다.",
			score: 1,
		},
		optionB: {
			kr:
				"완벽하게 수행하지 못하더라도 시간 내에 임무를 마무리하는 것이 중요하다.",
			score: -1,
		},
	},
	{
		type: questionTypes.SvsN,
		prompt: {
			kr: "기존 방식을...",
		},
		optionA: {
			kr: "최대한 따르며 임무를 달성한다.",
			score: -1,
		},
		optionB: {
			kr: "참고하여 나만의 방식으로 임무를 달성한다.",
			score: 1,
		},
	},
	{
		type: questionTypes.TvsF,
		prompt: {
			kr: "주변 사람들에게 나는...",
		},
		optionA: {
			kr: "강하고 능력있는 사람으로 인식되고 싶다.",
			score: -1,
		},
		optionB: {
			kr: "친근하고 인간성 좋은 사람으로 인식되고 싶다.",
			score: 1,
		},
	},
	{
		type: questionTypes.SvsN,
		prompt: {
			kr: "누군가에게 보고할때...",
		},
		optionA: {
			kr: "명확하고 구체적인 수치로 보고하는 것을 선호한다.",
			score: -1,
		},
		optionB: {
			kr: "수치보다는 나의 아이디어를 보고하는 것을 선호한다.",
			score: 1,
		},
	},
	{
		type: questionTypes.IvsE,
		prompt: {
			kr: "주인공이 되는 것이...",
		},
		optionA: {
			kr: "설레고 기대된다.",
			score: 1,
		},
		optionB: {
			kr: "부담스럽다.",
			score: -1,
		},
	},
	{
		type: questionTypes.SvsN,
		prompt: {
			kr: "의견을 나눌때...",
		},
		optionA: {
			kr: "나는 적극적으로 의견을 제시하는 편이다.",
			score: 1,
		},
		optionB: {
			kr: "나는 의견을 검토하고 질문하는 것을 선호한다.",
			score: -1,
		},
	},
	{
		type: questionTypes.SvsN,
		prompt: {
			kr: "새로운 제품을 샀을때...",
		},
		optionA: {
			kr: "사용설명서를 꼼꼼하고 세밀하게 읽는 편이다.",
			score: -1,
		},
		optionB: {
			kr: "제품의 대략적인 사용법을 파악하는 편이다.",
			score: 1,
		},
	},
	{
		type: questionTypes.TvsF,
		prompt: {
			kr: "어려운 결정을 해야 할때...",
		},
		optionA: {
			kr:
				"조금 냉정하고 무정하다는 말을 듣더라도, 필요하다면 단호한 결정을 내린다.",
			score: -1,
		},
		optionB: {
			kr:
				"최대한 상대방의 입장에서 생각해본 뒤, 어려운 결정이라는 운을 떼면서 말한다.",
			score: 1,
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
			kr: "약속을 지킬 수 없었던 이유를 들어보고 싶다.",
			score: 1,
		},
	},
	{
		type: questionTypes.TvsF,
		prompt: {
			kr: "가난한 사람을 보면...",
		},
		optionA: {
			kr: "어떠한 사회적인 혹은 개인적인 이유가 있지 않을까 생각한다.",
			score: 1,
		},
		optionB: {
			kr: "그 사람의 능력 부족 혹은 게으름 때문이라고 생각한다.",
			score: -1,
		},
	},
	{
		type: questionTypes.IvsE,
		prompt: {
			kr: "누군가 나에게 질문을 했을때...",
		},
		optionA: {
			kr: "바로 대답을 하고 대화속에서 생각을 하는 편이다.",
			score: 1,
		},
		optionB: {
			kr: "일단 머뭇거리지만 생각을 충분히 한 뒤 말을 꺼낸다.",
			score: -1,
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
		type: questionTypes.JvsP,
		prompt: {
			kr: "나는...",
		},
		optionA: {
			kr: "규칙이 엄격한 학교나 직장에 잘 적응하는 편이다.",
			score: -1,
		},
		optionB: {
			kr:
				"규칙이 엄격한 곳에서는 잘 적응하지 못하고, 보다 자유로운 곳에서 내 능력을 더 뽐낼 수 있다.",
			score: 1,
		},
	},
	{
		type: questionTypes.TvsF,
		prompt: {
			kr: "어려움을 겪고 있는 동료에게...",
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
			kr: "내 책상은...",
		},
		optionA: {
			kr: "항상 잘 정리되어있으며, 그렇지 않으면 불편하다.",
			score: -1,
		},
		optionB: {
			kr: "잘 정리되어 있지는 않지만, 필요한 물건을 어렵지 않게 찾을 수 있다.",
			score: 1,
		},
	},
];
