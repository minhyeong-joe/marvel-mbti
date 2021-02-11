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
			en: "I prefer…",
		},
		optionA: {
			kr: "혼자서 일하는 것을 선호한다.",
			en: "working alone.",
			score: -1,
		},
		optionB: {
			kr: "팀과 협력하는 것을 선호한다.",
			en: "working in a team.",
			score: 1,
		},
	},
	{
		type: questionTypes.JvsP,
		prompt: {
			kr: "계획을 짜야 할때...",
			en: "When making a plan...",
		},
		optionA: {
			kr: "구체적인 시간 단위로 계획해야 효율이 높아진다.",
			en:
				"efficiency increases with detailed planning, breaking down the schedule ferociously.",
			score: -1,
		},
		optionB: {
			kr: "널널하게 짜는 편이며, 시간을 유동적으로 활용할때 효율이 높아진다.",
			en:
				"efficiency increases with flexible planning, leaving enough time in between schedules.",
			score: 1,
		},
	},
	{
		type: questionTypes.IvsE,
		prompt: {
			kr: "직장이나 학교에서...",
			en: "At school or at the workplace, I try to…",
		},
		optionA: {
			kr: "되도록 말을 줄이고 먼저 말 걸지 않는다.",
			en: "keep a conversation to the minimum and don't initiate anything.",
			score: -1,
		},
		optionB: {
			kr: "동료나 친구와 되도록 많이 대화하려 하며 잡담을 즐긴다.",
			en: "talk to friends or colleagues and enjoy the usual chitchat.",
			score: 1,
		},
	},
	{
		type: questionTypes.SvsN,
		prompt: {
			kr: "나는...",
			en: "I prefer…",
		},
		optionA: {
			kr: "조직에 소속되어 구체적인 지시를 받는 것을 선호한다.",
			en: "being part of an organization and prefer receiving specific orders.",
			score: -1,
		},
		optionB: {
			kr: "어디에도 소속되지 않는 자유로운 자경대를 선호한다.",
			en: "being free of any ties to an organization, like a vigilante.",
			score: 1,
		},
	},
	{
		type: questionTypes.IvsE,
		prompt: {
			kr: "나의 의견을 말하고 난 뒤...",
			en: "After speaking what's on my mind...",
		},
		optionA: {
			kr: "괜히 말했다 생각하고 후회한다.",
			en: "I immediately regret what I did.",
			score: -1,
		},
		optionB: {
			kr: "내 생각을 다 말 하지 못한 것 같아 아쉬워한다.",
			en: "I wish I had spoken more of what's left on my mind.",
			score: 1,
		},
	},
	{
		type: questionTypes.JvsP,
		prompt: {
			kr: "시간이 조금 부족할 때, 나는...",
			en: "When running out of time finishing a task...",
		},
		optionA: {
			kr: "시간이 좀 더 걸리더라도 더 완벽하게 임무를 수행하려고 노력한다.",
			en:
				"I try to smooth out any untied knots even if that means running late.",
			score: 1,
		},
		optionB: {
			kr:
				"완벽하게 수행하지 못하더라도 시간 내에 임무를 마무리하는 것이 중요하다.",
			en: "I will submit it even if it's not complete to finish on time",
			score: -1,
		},
	},
	{
		type: questionTypes.SvsN,
		prompt: {
			kr: "기존 방식을...",
			en: "I typically...",
		},
		optionA: {
			kr: "최대한 따르며 임무를 달성한다.",
			en: "follow conventional ways of completing a task.",
			score: -1,
		},
		optionB: {
			kr: "참고하여 나만의 방식으로 임무를 달성한다.",
			en: "reference conventional ways but end up doing it my way.",
			score: 1,
		},
	},
	{
		type: questionTypes.TvsF,
		prompt: {
			kr: "주변 사람들에게 나는...",
			en: "To people around me, I want to be recognized as...",
		},
		optionA: {
			kr: "강하고 능력있는 사람으로 인식되고 싶다.",
			en: "capable and powerful.",
			score: -1,
		},
		optionB: {
			kr: "친근하고 인간성 좋은 사람으로 인식되고 싶다.",
			en: "friendly and genuine.",
			score: 1,
		},
	},
	{
		type: questionTypes.SvsN,
		prompt: {
			kr: "누군가에게 보고할때...",
			en: "When making a report...",
		},
		optionA: {
			kr: "명확하고 구체적인 수치로 보고하는 것을 선호한다.",
			en: "I prefer reporting with precision using numbers.",
			score: -1,
		},
		optionB: {
			kr: "수치보다는 나의 아이디어를 보고하는 것을 선호한다.",
			en: "I prefer reporting my ideas rather than using statistics.",
			score: 1,
		},
	},
	{
		type: questionTypes.IvsE,
		prompt: {
			kr: "주인공이 되는 것이...",
			en: "Idea of becoming the leading role...",
		},
		optionA: {
			kr: "설레고 기대된다.",
			en: "is exciting and flattering.",
			score: 1,
		},
		optionB: {
			kr: "부담스럽다.",
			en: "nerve wracking.",
			score: -1,
		},
	},
	{
		type: questionTypes.SvsN,
		prompt: {
			kr: "의견을 나눌때...",
			en: "When sharing ideas with one another...",
		},
		optionA: {
			kr: "나는 적극적으로 의견을 제시하는 편이다.",
			en: "I actively share my ideas.",
			score: 1,
		},
		optionB: {
			kr: "나는 의견을 검토하고 질문하는 것을 선호한다.",
			en: "I listen and ask questions of other ideas.",
			score: -1,
		},
	},
	{
		type: questionTypes.SvsN,
		prompt: {
			kr: "새로운 제품을 샀을때...",
			en: "After purchasing a product...",
		},
		optionA: {
			kr: "사용설명서를 꼼꼼하고 세밀하게 읽는 편이다.",
			en: "I read the instruction manual by heart.",
			score: -1,
		},
		optionB: {
			kr: "제품의 대략적인 사용법을 파악하는 편이다.",
			en: "I briefly skim over the manual and look for the general usage.",
			score: 1,
		},
	},
	{
		type: questionTypes.TvsF,
		prompt: {
			kr: "어려운 결정을 해야 할때...",
			en: "When making a difficult decision...",
		},
		optionA: {
			kr:
				"조금 냉정하고 무정하다는 말을 듣더라도, 필요하다면 단호한 결정을 내린다.",
			en: "Make a firm decision even if that can be a bit cold and heartless.",
			score: -1,
		},
		optionB: {
			kr:
				"최대한 상대방의 입장에서 생각해본 뒤, 어려운 결정이라는 운을 떼면서 말한다.",
			en:
				"Think about how the recipient of the news would feel and begin by explaining it was a hard decision.",
			score: 1,
		},
	},
	{
		type: questionTypes.JvsP,
		prompt: {
			kr: "시간 약속을 어기면...",
			en: "When someone is late...",
		},
		optionA: {
			kr: "약속을 어긴 사람에게 신뢰가 떨어진다.",
			en: "That person has lost a little bit of credit.",
			score: -1,
		},
		optionB: {
			kr: "약속을 지킬 수 없었던 이유를 들어보고 싶다.",
			en: "I am first curious why the person couldn't make it on time.",
			score: 1,
		},
	},
	{
		type: questionTypes.TvsF,
		prompt: {
			kr: "가난한 사람을 보면...",
			en: "When I meet a low-income person...",
		},
		optionA: {
			kr: "어떠한 사회적인 혹은 개인적인 이유가 있지 않을까 생각한다.",
			en: "I suspect there is either a societal or personal reason behind it.",
			score: 1,
		},
		optionB: {
			kr: "그 사람의 능력 부족 혹은 게으름 때문이라고 생각한다.",
			en: "I think it is because the person is lazy or incompetent.",
			score: -1,
		},
	},
	{
		type: questionTypes.IvsE,
		prompt: {
			kr: "누군가 나에게 질문을 했을때...",
			en: "When asked a question...",
		},
		optionA: {
			kr: "바로 대답을 하고 대화속에서 생각을 하는 편이다.",
			en: "I immediately open my mouth to respond and think during a dialogue.",
			score: 1,
		},
		optionB: {
			kr: "일단 머뭇거리지만 생각을 충분히 한 뒤 말을 꺼낸다.",
			en:
				"I might hesitate and try to think it through before opening my mouth.",
			score: -1,
		},
	},
	{
		type: questionTypes.TvsF,
		prompt: {
			kr: "나의 정신적 멘토에게...",
			en: "From my spiritual mentor...",
		},
		optionA: {
			kr: '"잘했어!" 라는 말을 듣고싶다.',
			en: 'I want to hear "You did excellent."',
			score: -1,
		},
		optionB: {
			kr: '"고생했어" 라는 말을 듣고싶다.',
			en: 'I hope to hear "You worked very hard."',
			score: 1,
		},
	},
	{
		type: questionTypes.JvsP,
		prompt: {
			kr: "나는...",
			en: "I do better in...",
		},
		optionA: {
			kr: "규칙이 엄격한 학교나 직장에 잘 적응하는 편이다.",
			en: "Schools or workplace with strictly followed rules and regulations.",
			score: -1,
		},
		optionB: {
			kr:
				"규칙이 엄격한 곳에서는 잘 적응하지 못하고, 보다 자유로운 곳에서 내 능력을 더 뽐낼 수 있다.",
			en: "Environments with lots of freedom",
			score: 1,
		},
	},
	{
		type: questionTypes.TvsF,
		prompt: {
			kr: "어려움을 겪고 있는 동료에게...",
			en: "A colleague is going through hardships...",
		},
		optionA: {
			kr: "공감하며 위로해준다.",
			en: "I have sympathy and will try to comfort him/her.",
			score: 1,
		},
		optionB: {
			kr: "방법을 제시하며 해결해주려 노력한다.",
			en: "I try to come up with ways to provide a helpful resolution.",
			score: -1,
		},
	},
	{
		type: questionTypes.JvsP,
		prompt: {
			kr: "내 책상은...",
			en: "My desk is...",
		},
		optionA: {
			kr: "항상 잘 정리되어있으며, 그렇지 않으면 불편하다.",
			en: "Organized and when it isn't, it is stressful.",
			score: -1,
		},
		optionB: {
			kr: "잘 정리되어 있지는 않지만, 필요한 물건을 어렵지 않게 찾을 수 있다.",
			en: "Not really organized, but I can find what I need when necessary.",
			score: 1,
		},
	},
];
