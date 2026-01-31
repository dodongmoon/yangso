export type ProblemType = 'SUBJECTIVE' | 'OBJECTIVE';

export interface Problem {
    id: number;
    subject: string;
    type: ProblemType;
    question: string;
    options?: string[]; // For objective
    answer: string; // Correct answer text or option index (0-based) - comma separated for multiple
    image?: string; // Filename in assets
}

export const problems: Problem[] = [
    {
        id: 1,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "혈관내막에 손상이 가해졌을 때, 세포의 증식과 세포외기질의 생산을 통하여 내막을 두껍게 하는 주된 세포는 무엇인가?",
        options: [
            "혈관내피세포 (Endothelial cell)",
            "섬유모세포(Fibroblast)",
            "평활근세포 (Smooth muscle cell)",
            "큰포식세포(Macrophage)",
            "혈관주위세포(Pericyte)"
        ],
        answer: "3", // Dummy answer: Smooth muscle cell (index 2) usually migrates
    },
    {
        id: 2,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "고혈압을 초래할 수 있는 질환이다. 아닌 것을 고르시오.",
        options: [
            "Renin producing tumor",
            "Pheochromocytoma",
            "Preeclampsia",
            "Aortic dissection", // This is usually a complication, not a cause?
            "Adrenocortical hyperfunction (Cushing syndrome)"
        ],
        answer: "4", // Dummy answer
    },
    {
        id: 3,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "좌측 심장동맥에 죽상경화증을 가지고 있는 환자이다. 검사소견상 동맥 단면의 30% 정도가 막혀있다. 이 환자에서 죽상판의 크기가 증가하거나 혹은 파열을 유도하여 임상적으로 급성 증상을 초래할 수 있는 조건 2가지를 고르시오.",
        options: [
            "죽상판 내 괴사조직이 적다.",
            "죽상판의 피막이 두껍다.",
            "죽상판 내 지방성분의 함량이 적다.",
            "죽상판 내 평활근세포의 함량이 적다.",
            "죽상판 내 활성화된 염증세포의 함량이 많다."
        ],
        answer: "4,5", // Dummy answer for testing multiple selection logic
    },
    {
        id: 4,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "코막힘과 코분비물을 주소로 내원한 56세 환자이다. 폐에 이상소견이 있어 조직검사를 하였다. 광범위한 괴사와 함께 육아종성염증과 혈관염이 관찰되었다. AFB검사는 음성이고 C-ANCA는 양성이다. 진단은 무엇인가?",
        options: [
            "Giant cell arteritis",
            "Granulomatosis with polyangitis",
            "Takayasu arteritis",
            "Anti-GBM Ab syndrome",
            "Microscopic polyangitis"
        ],
        answer: "2"
    },
    {
        id: 5,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "장기간 본태성 고혈압(essential hypertension)으로 치료중인 64세 남성이다. 약물치료에도 불구하고 혈압을 잘 조정되지 않고 있다. 말초혈압이 높은 상태에서 심박출량을 최대한 유지하기 위하여 심장이 보이는 적응반응은 무엇인가?",
        options: [
            "증식 (hyperplasia)",
            "비후 (hypertrophy)",
            "위축(atrophy)",
            "화생 (metaplasia)",
            "역류 (regurgitation)"
        ],
        answer: "2"
    },
    {
        id: 6,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "심장에 허혈이 발생할 경우, 심근세포에서 가장 먼저 나타나는 변화는 무엇인가?",
        options: [
            "ATP의 생산 감소",
            "심근의 수축기능 감소",
            "심근의 괴사",
            "미세혈관손상",
            "심근이 섬유조직으로 대치"
        ],
        answer: "1"
    },
    {
        id: 7,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "막혔던 심장동맥을 시술로 재관류하였다. 재관류로 많은 근육세포가 가역적 손상에서 벗어나 생존할 수 있지만, 일부에서는 재관류로 인해 손상이 발생하기도 한다. 재관류손상의 기전에 해당되지 않는 것을 고르시오.",
        options: [
            "Mitochondrial dysfunction",
            "Myocyte hypocontracture",
            "Free radicals",
            "Leukocyte aggregates",
            "Platelet and complement activation"
        ],
        answer: "2"
    },
    {
        id: 8,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "심장의 허혈로 심장세포에 비가역적 손상이 발생했을 때, 심장에서 혈액으로 유리가 증가하는 것을 2가지 고르시오.",
        options: [
            "Troponin",
            "C-reactive protein",
            "AST",
            "CK-MB",
            "Amyloid A"
        ],
        answer: "1,4"
    },
    {
        id: 9,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "허혈심장병, 고혈압, 대동맥판 또는 승모판질환, 심근질환에 의해 발병하는 질환으로 폐부종, 폐출혈, 급성세뇨관괴사, 저산소뇌손상을 초래되는 질환은?",
        options: [
            "좌심부전(left-sided heart failure)",
            "우심부전(right-sided heart failure)",
            "급성심근경색증(myocardial infarction)",
            "비대심근병증(hypertrophic cardiomyopathy)",
            "대동맥류(aortic aneurysm)"
        ],
        answer: "1"
    },
    {
        id: 10,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "68세 남자가 작년부터 점점 심해지는 호흡곤란으로 내원하였다. 청진 시 전체 폐에서 수포음(crackles)이 들렸다. 심초음파에서 현저하게 두꺼워진 좌심실벽이 관찰되고, 가슴 X-ray에서 폐 소견과 왼쪽 심장 경계면이 두드러진 소견이 보였다. 상기 소견들을 초래했을 가능성이 가장 큰 원인?",
        options: [
            "폐기종(emphysema)",
            "규폐증(silicosis)",
            "삼첨판역류(tricuspid valve regurgitation)",
            "폐동맥판 협착(pulmonic valve stenosis)",
            "전신 고혈압(systemic hypertension)"
        ],
        answer: "5"
    },
    {
        id: 11,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "5세 남아가 또래만큼 활동적이지 않고, 9개월 전부터는 운동 후에 심한 호흡곤란을 보인다며 내원하였다. 신체검사 상 체온 36.9℃, 맥박 81/min, 호흡수 19/min, 혈압 95/60 mmHg이다. 청진 시 범수축기 심잡음(holosystolic murmur)이 크게 들렸고, 양쪽 폐에서 수포음(crackles)이 들렸다. 가슴 X-ray에서 왼쪽 심장 경계면이 두드러져 있고 양쪽 폐 울혈 및 흉막 삼출소견이 관찰되었다. 다음 중 환아에게 발생했을 가능성이 가장 높은 것은?",
        options: [
            "대동맥 역류(Aortic regurgitation)",
            "관상동맥 경화증(Coronry atherosclerosis)",
            "비세균혈전심내막염(Nonbacterial thrombotic endocarditis)",
            "폐고혈압(Pulmonary hypertension)",
            "제한심근병증(Restrictive cardiomyopathy)"
        ],
        answer: "4",
        image: "question_1.jpg" // Placeholder for 1번사진
    },
    {
        id: 12,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "15세 남아가 300m 이상 달리기를 하면 다리가 아프다고 내원하였다. 신체검사 상 체온 36.8℃, 심박동수 76/min, 호흡수 22/min, 혈압 165/90 mmHg였으며, 동맥혈 산소포화도는 정상 범위였다. 환아 하지 맥박이 상지 맥박보다 약하다면 가장 의심되는 질환은?",
        options: [
            "심실중격결손(Ventricular septal defect)",
            "동맥판열림증(Patent ductus arteriosus)",
            "팔로네사징후(Tetralogy of Fallot)",
            "완전대동맥전위(Transposition of the great vessels)",
            "대동맥축착(Coarctation of the aorta)"
        ],
        answer: "5"
    },
    {
        id: 13,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "27세 여자가 정상적으로 만삭아 분만하였다. 태아는 출생 직후부터 청색증이 나타나고 호흡곤란, 빈맥 및 수유곤란을 보이다 사망하였다. 부검으로 확인된 환아 심장의 육안소견이다. 가장 가능성이 높은 진단은?",
        options: [
            "심실중격결손 (Ventricular septal defect)",
            "동백관열림증(Patent ductus arteriosus)",
            "팔로네사징후(Tetralogy of Fallot)",
            "완전대동맥전위(Transposition of the great vessels)",
            "대동맥축착(Coarctation of the aorta)"
        ],
        answer: "4",
        image: "question_2.jpg" // Placeholder for 1번사진
    },
    {
        id: 14,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "12세 남아가 축구경기 중 의식을 잃고 쓰러져 응급실로 후송되었다. 여러 차례 심폐소생술을 실시하였으나 사망했다. 부검으로 확인된 환아 심장의 육안 소견이다. 가장 가능성이 높은 진단은?",
        options: [
            "심실중격결손(Ventricular septal defect)",
            "동맥관열림증(Patent ductus arteriosus)",
            "팔로네증후군(Tetralogy of Fallot)",
            "완전대동맥전위(Transposition of the great vessels)",
            "대동맥축착(Coarctation of the aorta)"
        ],
        answer: "5",
        image: "question_3.jpg" // Placeholder for 1번사진
    },
    {
        id: 15,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "평소 건강하던 44세 남자가 6개월 전부터 운동 시 호흡곤란으로 운동하기가 점점 힘들어 진다면서 내원하였다. 신체검사 상 체온 36.5℃, 심박동수 78/min, 호흡수 22/min, 혈압 110/70 mmHg였다. 흉부 청진 시 양측 폐 전체에 수포음(rales)이 들렸다. 혈액검사에서 혈청 troponin I, glucose, creatinine과 total cholesterol 수치 모두 정상범위였다. 가슴 X-ray에서 심장이 둥글게 커져있고 폐부종과 흉막삼출이 관찰되었다. 심초음파에서 4개의 심방과 심실이 모두 확장되어 있고 이첨판과 삼첨판 역류 및 심박출률이 30%로 감소된 소견이 관찰되었다. 가장 가능성 높은 질환?",
        options: [
            "아밀로이드증(amyloidosis)",
            "확장심근병증(dilated cardiomyopathy)",
            "비대심근병증(hypertrophic cardiomyopathy)",
            "제한심근병증(restrictive cardiomyopathy)",
            "류마티스 심장병(rheumatic heart disease)"
        ],
        answer: "2"
    },
    {
        id: 16,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "86세 남자가 7년 전부터 심해지는 호흡곤란으로 운동하기도 힘들다며 내원하였다. 신체검사상 체온 36.5℃, 혈압 135/85 mmHg, 심박동수 76/min으로 불규칙했다. 흉부 청진 시 양측 폐 하부에 수포음(crackles)이 들렸고, 가슴 X-선 촬영에서 경한 심장비대와 폐 울혈이 관찰되었다. 심장초음파 상에서 양쪽 심실벽이 두꺼워져 있으면서 움직임의 감소뿐 아니라 좌심실충만(left ventricular filling)도 감소해 있었다. 좌심실 박출계수(ejection fraction)는 25%였다. 심근내막 생검(endomyocardial biopsy) 상에서 심근섬유들 사이에 무정형 분홍색 침착물(amorphous pink-staining deposits)이 관찰되고 염증이나 괴사소견은 없었다. 다음 중 가장 가능성이 높은 진단은?",
        options: [
            "심장 아밀로이드증(Cardiac amyloidosis)",
            "류마티스성 심장병(Rheumatic heart disease)",
            "확장심근병증(dilated cardiomyopathy)",
            "비대심근병증(hypertrophic cardiomyopathy)",
            "좌심실류(Left ventricular aneurysm)"
        ],
        answer: "1",
        image: "question_4.jpg" // Placeholder for 1번사진
    },
    {
        id: 17,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "14세 여아가 활동 시 호흡곤란을 주소로 내원하였다. 환아는 2주 전에 상기도 감염을 앓았다. 신체검사 상 체온 37.0℃, 심박동수 90/min, 호흡수 20/min, 혈압 85/45 mmHg였다. 흉부 청진에서 마찰음(friction rub)이 들렸고, 가슴 X-ray에서 폐부종 소견이 보였다. 심초음파에서 승모판과 대동맥판이 닫히는 선을 따라 작은 크기의 증식물(vegetation)이 관찰되었다. 정확한 진단을 위해 시행한 심내막 조직생검 결과 환자의 상태는 1달 후에 호전되었다. 만성기 때 가장 많이 보이는 합병증?",
        options: [
            "제한성 심장막염(constrictive pericarditis)",
            "확장심근병증(dilated cardiomyopathy)",
            "좌심실류(left ventricular aneurysm)",
            "승모판탈출증(mitral valve prolapse)",
            "승모판협착증(mitral stenosis)"
        ],
        answer: "5",
        image: "question_5.jpg" // Placeholder for 1번사진
    },
    {
        id: 18,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "5세 남자 아이가 기침과 호흡곤란을 주소로 내원하였다. 컴퓨터단층촬영에서 종격동에 3cm 크기의 종괴가 관찰되어 종괴절제술을 시행하였다. 병변은 낭성 종괴였으며, 내강을 이루는 상피세포는 섬모거짓중층원주상피세포(ciliated pseudostratified columnar epithelium)였다. 다음 중 가장 가능성이 높은 진단은?",
        options: [
            "폐형성부전(pulmonary hypoplasia)",
            "기관지성 낭종(bronchogenic cyst)",
            "폐분리증(pulmonary sequestration)",
            "선천적 기관협착증(tracheal stenosis)",
            "기관지폐쇄증(bronchial atresia)"
        ],
        answer: "2"
    },
    {
        id: 19,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "다음은 후천성 무기폐를 일으킬 수 있는 요인들이다. 후천성 무기폐는 발병기전에 따라 세 가지로 분류할 수 있는데, 다음 중 압박성 무기폐(compression atelectasis)를 일으킬 수 있는 원인으로 가장 가능성이 높은 것을 고르시오.",
        options: [
            "기관지 종양(neoplasm)",
            "중피종(mesothelioma)",
            "심부전(cardiac failure)",
            "외부 이물질 흡입(aspiration of foreign body)",
            "수술 후 상태(postoperative state)"
        ],
        answer: "2"
    },
    {
        id: 20,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "다음은 폐기종에 대한 설명이다. 이 중에서 가장 맞지 않는 기술은 어느 것인지 고르시오.",
        options: [
            "폐기종은 만성폐쇄성폐질환(Chronic Obstructive Pulmonary Disease)에 속한다.",
            "폐기종에서 가장 흔한 유형은 중심꽈리형(centriacinar) 폐기종이다.",
            "범꽈리형(panacinar) 폐기종은 alpha1-antitrypsin deficiency와 연관되어 나타나기도 한다.",
            "원위꽈리형(paraseptal, distal acinar) 폐기종은 기흉(pneumothorax)을 발생시킬 수 있다.",
            "중심꽈리형(centriacinar) 폐기종은 주로 폐의 하엽(lower lobe)에서 발생한다."
        ],
        answer: "5"
    },
    {
        id: 21,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "생후 5개월 된 여아가 갑작스러운 호흡부전과 청색증으로 내원하였다. 컴퓨터 단층 촬영상 양측성 폐침윤 음영이 보였다. 치료를 시행하였으나 호전되지 않고 결국 사망하였다. 환아의 폐부검 조직학적 검사에서 미만성 폐포손상(diffuse alveolar damage) 소견이 관찰되었다. 환아의 진단으로 가장 가능성이 높은 것은?",
        options: [
            "폐포단백질증",
            "급성호흡곤란증후군(ARDS)",
            "과민성 폐장염",
            "비특이성 간질성 폐렴",
            "특발성 폐섬유화증"
        ],
        answer: "2"
    },
    {
        id: 22,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "다음은 폐쇄성 폐질환에 대한 설명이다. 이 중에서 가장 맞는 기술은 어느 것인지 고르시오.",
        options: [
            "아토피성 천식은 외부 환경의 항원에 대해 Th2 반응이 과하게 활성화되어 있다.",
            "폐기종은 환자의 모습을 보고 \"Pink Puffer\"라고 말하기도 하며 초기부터 호흡부전이나 폐성심을 일으키고 주로 객담을 동반한 기침이 특징이다.",
            "천식에서 기도개형(airway remodeling)이 일어나면 점막밑샘(submucosal gland)의 크기 및 기도 상피세포 내 술잔세포(goblet cell)의 수가 감소한다.",
            "기관지 확장증(bronchiectasis)은 기관지벽이 파괴되어 탄력성이 떨어지고 기관지가 확장된 소견을 보이지만, 치료를 받으면 원래 상태로 쉽게 회복된다.",
            "아토피성 천식은 제4형 과민반응(type IV hypersensitivity reaction)으로 발생한다."
        ],
        answer: "1"
    },
    {
        id: 23,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "다음은 간질성 폐질환에 대한 설명이다. 이 중에서 가장 맞지 않는 기술을 고르시오.",
        options: [
            "박리성 간질성 폐렴(desquamative interstitial pneumonia)은 폐포 내강에 갈색색소를 포함한 대식세포(macrophage)가 많이 관찰되며, 스테로이드 치료와 금연을 하면 좋은 예후를 보인다.",
            "과민성폐렴(hypersensitivity pneumonitis)은 제3형과 제4형 과민반응이 중요한 기전으로 알려져 있다.",
            "비특이성 간질성 폐렴(nonspecific interstitial pneumonia)은 시간적 이질성(temporal heterogeneity)을 보이는 조직학적 소견을 보인다.",
            "입자 크기가 1~5µm인 미세분진은 진폐증(pneumoconiosis)을 일으킬 수 있다.",
            "특발성 폐섬유화증(idiopathic pulmonary fibrosis)은 주로 양쪽 폐하엽에서 호발한다."
        ],
        answer: "2"
    },
    {
        id: 24,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "70세 여자가 대퇴골 골절 수술을 받고 삼일 후 갑자기 가슴통증과 호흡곤란을 느끼며 청색증을 보였다. 컴퓨터 단층 촬영에서 폐혈관이 막혀 있는 소견이 보였다. 위와 같은 질환을 일으키는 가장 흔한 원인은?",
        options: [
            "폐성심",
            "흡인성 폐렴",
            "종양",
            "다리의 심부정맥혈전(DVT)",
            "약물복용"
        ],
        answer: "4"
    },
    {
        id: 25,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "다음은 감염성 질환에 대한 설명이다. 이 중에서 가장 맞는 기술은 어느 것인지 고르시오.",
        options: [
            "대엽성 폐렴(lobar pneumonia)을 일으키는 세균 중에서 황색포도상구균(Staphylococcus aureus)이 가장 흔하게 관찰된다.",
            "바이러스성 폐렴은 간질성 염증보다는 폐포 내강에 호중구, 적혈구, 피브린이 융합된 삼출물이 차 있는 조직학적 소견을 보인다.",
            "크립토코커스 폐렴(cryptococcal pneumonia)은 두꺼운 다당류 캡슐을 가지고 있어서 mucicarmine 염색을 했을 때 양성 소견을 보인다.",
            "사람폐포자충 폐렴(pneumocystis pneumonia)은 면역이 저하된 사람보다 건강한 사람에서 잘 걸리며, 기회감염으로 걸리게 된다.",
            "결핵균은 항산성 염색(AFB stain)에 잘 염색되지 않는다."
        ],
        answer: "3"
    },
    {
        id: 26,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "1차 폐결핵 감염에서 폐실질과 림프절에 염증 및 경화 소견을 보이는 것을 종합하여 부르는 용어로 가장 맞는 것을 고르시오.",
        options: [
            "성상소체(Asteroid body)",
            "곤 복합체(Ghon complex)",
            "마손소체(Masson bodies)",
            "육아종성 염증(granulomatous inflammation)",
            "샤우만소체(Schaumann bodies)"
        ],
        answer: "2"
    },
    {
        id: 27,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "45세 남자가 흉부 X선 검사에서 좌측 폐에 종괴성 음영이 관찰되어 내원하였다. 환자는 20년간 하루 한 갑씩 흡연을 하였다고 하며, 컴퓨터 단층촬영에서 좌상엽 기관지에 크기 3cm의 종괴가 관찰되었다. 조직검사 결과 각화(keratinization)를 보이는 종양이었으며 면역조직화학염색에서 p40, p63에 양성이었다. 가장 가능성이 높은 진단은?",
        options: [
            "편평세포암(squamous cell carcinoma)",
            "대세포암(large cell carcinoma)",
            "소세포암(small cell carcinoma)",
            "샘암(adenocarcinoma)",
            "과오종(hamartoma)"
        ],
        answer: "1",
        image: "question_6.jpg" // Placeholder for 1번사진
    },
    {
        id: 28,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "53세 여자가 건강검진 흉부 X선 검사에서 우측 폐에 비정상적인 음영 증가를 주소로 내원하였다. 비흡연자였으며, 컴퓨터 단층촬영에서 우상엽 변연부에 2.1cm 크기의 종괴가 관찰되었다. 우상엽 절제술을 시행하였으며, 면역조직화학염색 결과 TTF-1에 양성이었다. 유전자 검사에서 돌연변이가 발견될 확률이 가장 높은 유전자는?",
        options: [
            "KRAS",
            "ALK",
            "ErbB-2",
            "EGFR",
            "BRAF"
        ],
        answer: "5",
        image: "question_7.jpg" // Placeholder for 1번사진
    },
    {
        id: 29,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "65세 남자가 흉부 X선 검사에서 우측 폐에 종괴성 음영이 관찰되어 내원하였다. 외견상 보름달 모양의 얼굴, 중심성 비만의 모습을 보였으며 고혈압이 있었다. 환자는 20년간 하루 한 갑씩 흡연을 하였다고 한다. 컴퓨터 단층촬영에서 우측 폐문부를 중심으로 5cm 크기의 종괴가 관찰되었다. 조직검사 결과 면역조직화학염색에서 synaptophysin 및 chromogranin에 양성이었다. 가장 가능성이 높은 진단은?",
        options: [
            "편평세포암(squamous cell carcinoma)",
            "대세포암(large cell carcinoma)",
            "소세포암(small cell carcinoma)",
            "샘암(adenocarcinoma)",
            "과오종(hamartoma)"
        ],
        answer: "3",
        image: "question_8.jpg" // Placeholder for 1번사진
    },
    {
        id: 30,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "5세 남자 아이가 기침과 호흡곤란을 주소로 내원하였다. 컴퓨터 단층촬영에서 종격동에 3cm 크기의 종괴가 관찰되어 종괴절제술을 시행하였다. 병변은 낭성 종괴였으며, 내강을 이루는 상피세포는 섬모거짓중층원주상피세포(ciliated pseudostratified columnar epithelium)였다. 다음 중 가장 가능성이 높은 진단은?",
        options: [
            "폐형성부전(pulmonary hypoplasia)",
            "기관지성 낭종(bronchogenic cyst)",
            "폐분리증(pulmonary sequestration)",
            "선천적 기관협착증(tracheal stenosis)",
            "기관지폐쇄증(bronchial atresia)"
        ],
        answer: "2"
    },
    {
        id: 31,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "다음은 호흡기계와 관련된 선천성 기형에 대한 설명이다. 다음 기술 중 가장 틀린 것은?",
        options: [
            "전장낭종(foregut cyst)은 주로 폐문부(hilum)나 중앙 종격동(middle mediastinum)에서 발견된다.",
            "양수과소증(oligohydramnios)은 폐형성부전(pulmonary hypoplasia)을 유발할 수 있다.",
            "내엽형 폐분리증(intralobar pulmonary sequestration)은 주로 체동맥(systemic artery)을 통해서 혈액을 공급받으며, 반복되는 국소 감염이나 기관지 확장증을 일으킨다.",
            "외엽형 폐분리증(extralobar pulmonary sequestration)은 컴퓨터 단층촬영에서 고형성 종괴의 형태로 발견되며, 기관계(airway system)와 연결되어 있다.",
            "기관과 식도가 비정상적으로 연결되는 기관식도루(tracheoesophageal fistula)가 생길 수 있다."
        ],
        answer: "4"
    },
    {
        id: 32,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "다음은 후천성 무기폐를 일으킬 수 있는 요인들이다. 후천성 무기폐는 발병기전에 따라 세 가지로 분류할 수 있는데, 다음 중 압박성 무기폐(compression atelectasis)를 일으킬 수 있는 원인으로 가장 가능성이 높은 것은?",
        options: [
            "기관지 종양(neoplasm)",
            "중피종(mesothelioma)",
            "심부전(cardiac failure)",
            "외부 이물질 흡입(aspiration of foreign body)",
            "수술 후 상태(postoperative state)"
        ],
        answer: "3"
    },
    {
        id: 33,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "다음은 폐기종에 대한 설명이다. 다음 기술 중 가장 틀린 것은?",
        options: [
            "폐기종은 만성폐쇄성폐질환(Chronic Obstructive Pulmonary Disease)에 속한다.",
            "폐기종에서 가장 흔한 유형은 중심꽈리형(centriacinar) 폐기종이다.",
            "범꽈리형(panacinar) 폐기종은 alpha1-antitrypsin deficiency와 연관되어 나타나기도 한다.",
            "원위꽈리형(paraseptal, distal acinar) 폐기종은 기흉(pneumothorax)을 발생시킬 수 있다.",
            "중심꽈리형(centriacinar) 폐기종은 주로 폐의 하엽(lower lobe)에서 발생한다."
        ],
        answer: "5"
    },
    {
        id: 34,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "다음은 폐쇄성 폐질환에 대한 설명이다. 다음 기술 중 가장 맞는 것은?",
        options: [
            "아토피성 천식은 외부 환경의 항원에 대해 Th2 반응이 과하게 활성화되어 있다.",
            "폐기종은 환자의 모습을 보고 \"Pink Puffer\"라고 말하기도 하며, 초기부터 호흡부전이나 폐성심을 잘 일으키고, 주로 객담을 동반한 기침이 동반된다.",
            "천식에서 기도개형(airway remodeling)이 일어나면 점막밑샘(submucosal gland)의 크기 및 기도 상피세포 내 술잔세포(goblet cell)의 수가 감소한다.",
            "기관지 확장증(bronchiectasis)은 기관지벽이 파괴되어 탄력성이 떨어지고 기관지가 확장된 소견을 보이지만, 치료를 받으면 원래 상태로 쉽게 회복된다.",
            "아토피성 천식은 제4형 과민반응(type IV hypersensitivity reaction)으로 발생한다."
        ],
        answer: "1"
    },
    {
        id: 35,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "다음은 간질성 폐질환에 대한 설명이다. 다음 기술 중 가장 틀린 것은?",
        options: [
            "박리성 간질성 폐렴(desquamative interstitial pneumonia)은 폐포 내강에 갈색색소를 포함한 대식세포(macrophage)가 많이 관찰되며, 스테로이드 치료와 금연을 하면 좋은 예후를 보인다.",
            "과민성폐렴(hypersensitivity pneumonitis)은 제3형과 제4형 과민반응이 중요한 기전으로 알려져 있다.",
            "비특이성 간질성 폐렴(nonspecific interstitial pneumonia)은 시간적 이질성(temporal heterogeneity)을 보이는 조직학적 소견을 보인다.",
            "입자 크기가 1~5μm인 미세분진은 진폐증(pneumoconiosis)을 일으킬 수 있다.",
            "특발성 폐섬유화증(idiopathic pulmonary fibrosis)은 주로 양쪽 폐하엽에서 호발한다."
        ],
        answer: "3"
    },
    {
        id: 36,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "70세 여자가 대퇴골 골절 수술을 받고 삼일 후 갑자기 가슴통증과 호흡곤란을 느끼며 청색증을 보였다. 컴퓨터 단층 촬영에서 폐혈관이 막혀 있는 소견이 보였다. 위와 같은 질환을 일으키는 가장 흔한 원인은?",
        options: [
            "폐성심",
            "흡인성 폐렴",
            "폐종양",
            "다리의 심부정맥혈전",
            "약물복용"
        ],
        answer: "4"
    },
    {
        id: 37,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "다음은 감염성 질환에 대한 설명이다. 다음 기술 중 가장 맞는 것은?",
        options: [
            "대엽성 폐렴(lobar pneumonia)을 일으키는 세균 중에서 황색포도상구균(Staphylococcus aureus)이 가장 흔하게 관찰된다.",
            "바이러스성 폐렴은 간질성 염증보다는 폐포 내강에 호중구, 적혈구, 피브린이 융합된 삼출물이 차 있는 조직학적 소견을 보인다.",
            "크립토코커스 폐렴(cryptococcal pneumonia)은 두꺼운 다당류 캡슐을 가지고 있어서 mucicarmine 염색을 했을 때 양성 소견을 보인다.",
            "사람폐포자충 폐렴(pneumocystis pneumonia)은 면역이 저하된 사람보다 건강한 사람에서 잘 걸리며, 기회감염으로 걸리게 된다.",
            "결핵균은 항산성 염색(AFB stain)에 잘 염색되지 않는다."
        ],
        answer: "3"
    },
    {
        id: 38,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "1차 폐결핵 감염에서 폐실질과 림프절에 염증 및 경화 소견을 보이는 것을 종합하여 부르는 용어로 가장 맞는 것을 고르시오.",
        options: [
            "성상소체 (Asteroid body)",
            "곤 복합체 (Ghon complex)",
            "마손소체 (Masson bodies)",
            "육아종성 염증 (granulomatous inflammation)",
            "샤우만소체 (Schaumann bodies)"
        ],
        answer: "2"
    },
    {
        id: 39,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "55세 남자가 흉부 X선 검사에서 좌측 폐에 종괴성 음영이 관찰되어 내원하였다. 환자는 35년간 하루 한 갑씩 흡연을 하였다고 하며, 컴퓨터 단층촬영에서 우상엽 기관지에 2.5cm 크기의 종괴가 관찰되었다. 조직검사 결과 각화(keratinization)를 보이는 종양이었으며 면역조직화학염색에서 p40, p63에 광범위하게 양성소견을 보였다. 가장 가능성이 높은 진단은?",
        options: [
            "편평세포암 (squamous cell carcinoma)",
            "대세포암 (large cell carcinoma)",
            "소세포암 (small cell carcinoma)",
            "샘암 (adenocarcinoma)",
            "과오종 (hamartoma)"
        ],
        answer: "1",
        image: "question_9.jpg"
    },
    {
        id: 41,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "다음은 악성 중피종 (malignant mesothelioma)에 대한 설명이다. 다음 기술 중 가장 틀린 것은?",
        options: [
            "흉막이 비정상적으로 두꺼워진 것을 볼 수 있다.",
            "조직학적으로 상피모양(epithelioid), 육종모양(sarcomatoid) 또는 혼합형(mixed)의 형태를 보일 수 있다.",
            "구축성 무기폐 (contraction atelectasis)를 발생시킬 수 있다.",
            "면역조직화학염색을 했을 때 Calretinin, WT-1, D2-40에 주로 양성 소견을 보인다.",
            "전자현미경에서 주로 짧은 미세융모(short microvilli)를 관찰할 수 있다."
        ],
        answer: "5"
    },
    {
        id: 42,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "45세 남자가 두통으로 내원하였다. 10년 전부터 혈압이 150/90 mmHg에서 160/95 mmHg로 잘 조절되지 않았고, 3개월 전부터는 250/125 mmHg로 높아졌다고 했다. 이학적 검사 상 체온 36.9°C, 청진 시 폐와 심장에 특이 소견이 관찰되지 않았으며, 복부 촉진에서도 특이 소견이 없었다. 흉부 X-ray에서 좌심실비대 소견이 관찰되었다. 혈액검사에서 혈청 creatinine 수치는 3.8 mg/dL였다. 이 환자의 신장에서 관찰될 가능성이 가장 높은 혈관병변은?",
        options: [
            "죽상경화증(atherosclerosis)",
            "거대세포동맥염(giant cell arteritis)",
            "유리질 소동맥경화증(hyaline arteriosclerosis)",
            "증식 소동맥경화증(hyperplastic arteriolosclerosis)",
            "타카야수동맥염(Takayasu arteritis)"
        ],
        answer: "4"
    },
    {
        id: 43,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "당뇨병 병력이 있는 40세 남자가 지난 주 동안 복통이 악화되어 내원하였다. 신체검사 상 체온 36.9°C, 맥박 77/분, 호흡 16/분, 혈압 135/85 mmHg였다. 혈액 검사 상 hemoglobin A1c는 10.5%였다. 다음 중 이 환자에서 질환을 초래했을 가능성이 가장 높은 원인?",
        options: [
            "고지질혈증",
            "비만",
            "흡연",
            "고혈압",
            "당뇨"
        ],
        answer: "5",
        image: "question_10.jpg"
    },
    {
        id: 44,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "50세 남자가 지난 2년간 운동 시 가슴통증을 느껴왔다. 신체검사 상 혈압 135/75 mmHg, 심박수 79/min, 다소 불규칙한 심박동을 보였고, 관상동맥 혈관조영술(coronary angiography)에서 좌전하행관상동맥(LAD)의 직경이 75% 좁아져 있었다. 이 병변의 발병 기전에서 가장 초기에 관여한 세포는?",
        options: [
            "Monocytes",
            "Neutrophils",
            "Smooth muscle cells",
            "Platelets",
            "Endothelial cells"
        ],
        answer: "5"
    },
    {
        id: 45,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "건강한 성인 남성과 여성을 대상으로 동맥경화성 심혈관 질환의 발병을 평가하기 위하여 지난 20년간 코호트 연구가 수행되어 다양한 테스트가 진행되었다. 다음 테스트 결과 중 이 질환의 발병에 관련되었을 가능성이 가장 높은 것은?",
        options: [
            "Anti-proteinase 3 (PR3)",
            "C-reactive protein (CRP)",
            "Cryoglobulin",
            "Erythrocyte sedimentation rate (ESR)",
            "Platelet count"
        ],
        answer: "2"
    },
    {
        id: 46,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "30세 여자가 5개월 전부터 오른쪽 눈의 시력이 떨어지고 양쪽 팔이 차갑고 감각이 둔해진다며 내원하였다. 체온 36.7°C, 혈압 100/70 mmHg, 요골동맥의 맥박(radial pulses)은 촉진되지 않았으나 대퇴동맥의 맥박(femoral pulses)은 강하게 느껴졌다. 양팔의 청색증이 관찰되었고 ANA test는 음성이었다. 가장 의심되는 질환은?",
        options: [
            "복부 대동맥류(abdominal aneurysm)",
            "대동맥박리(aortic dissection)",
            "거대세포동맥염(giant cell arteritis)",
            "타카야수동맥염(Takayasu arteritis)",
            "결절여러동맥염(polyarteritis nodosa)"
        ],
        answer: "4"
    },
    {
        id: 47,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "3세 여아 2일 전부터 열나고 손, 발이 붓고 붉어져 내원했다. 신체검사에서 피부가 벗겨지는 발진, 입과 손발바닥 발적, 목 주변 림프절 종창이 관찰되었다. 이 질환을 치료하지 않는다면 발생할 가능성이 가장 높은 합병증은?",
        options: [
            "천식(Asthma)",
            "사구체신염(Glomerulonephritis)",
            "뇌출혈(Intracranial hemorrhage)",
            "심근경색(Myocardial infarction)",
            "폐고혈압(Pulmonary hypertension)"
        ],
        answer: "4"
    },
    {
        id: 49,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "40세 남자가 다수의 피부결절이 생겨서 내원하였다. 환자는 8년 전부터 신장이식으로 면역억제제 치료를 받고 있었고, HHV-8 (human herpesvirus-8)에 양성을 보였다. 가장 가능성이 높은 진단?",
        options: [
            "모세혈관종(capillary hemangioma)",
            "고름육아종(pyogenic granuloma)",
            "사구종양(glomus tumor)",
            "카포시육종(Kaposi sarcoma)",
            "혈관육종(angiosarcoma)"
        ],
        answer: "4",
        image: "question_11.jpg"
    },
    {
        id: 50,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "평소 건강했던 49세 여자가 지난 6개월 동안 4차례나 갑자기 의식을 잃고 쓰러졌다. 4번째 쓰러졌을 때에는 6시간 동안 의식이 회복되지 않았고 의식회복 후에도 왼쪽 팔에 힘이 빠지고 말을 제대로 하지 못했다. 체온과 혈압은 정상이었고 경동맥 초음파는 특이소견이 없었다. 가장 가능성이 높은 질환은?",
        options: [
            "심장막 삼출(pericardial effusion)",
            "좌심방 점액종(left atrial myxoma)",
            "이첨대동맥판막증(bicuspid aortic valve)",
            "승모판협착(mitral valve stenosis)",
            "심근염(myocarditis)"
        ],
        answer: "2"
    },
    {
        id: 51,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "유소아에서 가장 흔한 심장종양으로 거미세포(spider cell)를 특징으로 보이는 종양?",
        options: [
            "지방종(lipoma)",
            "점액종(myxoma)",
            "유두모양섬유탄력종(papillary fibroelastoma)",
            "횡문근종(rhabdomyoma)",
            "혈관육종(angiosarcoma)"
        ],
        answer: "4",
        image: "question_12.jpg"
    },
    {
        id: 52,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "12세 소년이 3주 전 인후염(group A β-hemolytic streptococcus)을 앓았다. 현재 청진 시 양쪽 폐에 수포음(crackles)이 들리고 급성 좌심실부전 증상과 심방세동이 발생했다. 좌심부전을 초래했던 원인으로 가장 가능성이 높은 것은?",
        options: [
            "심근염(Myocarditis)",
            "아밀로이드증(Amyloidosis)",
            "섬유성 심낭염(Fibrinous pericarditis)",
            "심낭압전(Tamponade)",
            "승모판 판막엽의 섬유화와 융합(Fibrosis of mitral valve with fusion of commissures)"
        ],
        answer: "1"
    },
    {
        id: 53,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "65세 여자가 2일 동안 점점 심해지는 호흡곤란이 발생하여 내원하였다. 입원 치료 중 갑자기 심정지로 사망하였다. 가장 가능성이 높은 진단?",
        options: [
            "급성 심근경색증(acute myocardial infarction)",
            "바이러스성 심근염(viral myocarditis)",
            "급성 류마티스 심근염(acute rheumatic myocarditis)",
            "고름심장막염(suppurative pericarditis)",
            "제한 심근병증(restrictive cardiomyopathy)"
        ],
        answer: "2",
        image: "question_13.jpg"
    },
    {
        id: 54,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "좌심실 후면, 하부 심실중격의 후방 1/3에 심근경색증이 발생하였다면, 다음 중 폐쇄된 관상동맥은?",
        options: [
            "left anterior descending",
            "right anterior descending",
            "left posterior descending",
            "right coronary artery",
            "left circumflex"
        ],
        answer: "4"
    },
    {
        id: 55,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "86세 남자가 7년 전부터 심해지는 호흡곤란으로 내원하였다. 혈압 135/85 mmHg, 심박동수 76/min으로 불규칙했다. 심장초음파 상에서 좌심실충만(left ventricular filling)이 감소해 있었다. 심근내막 생검 소견을 고려할 때 가장 가능성이 높은 진단은?",
        options: [
            "심장 아밀로이드증(Cardiac amyloidosis)",
            "류마티스성 심장병(Rheumatic heart disease)",
            "확장심근병증(dilated cardiomyopathy)",
            "비대심근병증(hypertrophic cardiomyopathy)",
            "좌심실류(Left ventricular aneurysm)"
        ],
        answer: "1",
        image: "question_14.jpg"
    },
    {
        id: 56,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "61세 남자가 1년 전에 심근경색증을 앓았다. 환자의 혈청에서 1년 전보다 수치가 감소되었을 것으로 기대되는 것은?",
        options: [
            "Cholesterol",
            "Renin",
            "Glucose",
            "Calcium",
            "Potassium"
        ],
        answer: "1"
    },
    {
        id: 57,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "63세 남자가 갑작스럽게 쥐어짜는 듯한 흉통이 발생하여 내원하였다. 심전도에서 ST 상승, 혈액검사에서 CK-MB 및 Troponin I의 증가가 관찰되었다. 상기 증상을 초래했을 가능성이 가장 높은 원인은?",
        options: [
            "류마티스 심장병",
            "관상동맥의 죽상경화증",
            "고지질혈증",
            "고혈압",
            "흡연"
        ],
        answer: "2"
    },
    {
        id: 58,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "대부분 죽상판의 파괴로 인한 혈전형성 및 혈관수축으로 인하여 휴식상태 혹은 경한 운동 시에도 흉통이 발생하나 15분 이상 지속되지는 않으며, 니트로글리세린에 잘 반응하지 않는 허혈심장병은?",
        options: [
            "안정 협심증(stable angina)",
            "불안정 협심증 (unstable angina)",
            "프린쯔메탈 이형협심증(Prinzmetal variant angina)",
            "심근경색증 (myocardial infarction)",
            "만성허혈심장병 (chronic ischemic heart disease)"
        ],
        answer: "2"
    },
    {
        id: 59,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "27세 여자가 정상적으로 만삭아를 분만하였다. 태아는 출생 직후부터 청색증이 나타나고 호흡곤란, 빈맥 및 수유곤란을 보이다 사망하였다. 가장 가능성이 높은 진단은?",
        options: [
            "심실중격결손(Ventricular septal defect)",
            "동맥관열림증(Patent ductus arteriosus)",
            "팔로네증후군(Tetralogy of Fallot)",
            "완전대동맥전위(Transposition of the great vessels)",
            "대동맥축착(Coarctation of the aorta)"
        ],
        answer: "4",
        image: "question_15.jpg"
    },
    {
        id: 60,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "12세 남아가 축구경기 중 의식을 잃고 쓰러져 사망했다. 부검으로 확인된 환아 심장의 육안소견이다. 가장 가능성이 높은 진단은?",
        options: [
            "심실중격결손(Ventricular septal defect)",
            "동맥관열림증(Patent ductus arteriosus)",
            "팔로네증후군(Tetralogy of Fallot)",
            "완전대동맥전위(Transposition of the great vessels)",
            "대동맥축착(Coarctation of the aorta)"
        ],
        answer: "5",
        image: "question_16.jpg"
    },
    {
        id: 61,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "5세 남아가 운동 후에 심한 호흡곤란을 보인다며 내원하였다. 청진 시 범수축기 심잡음이 크게 들렸고, 양쪽 폐에서 수포음(crackles)이 들렸다. 가슴 X-ray에서 폐 울혈 및 흉막 삼출소견이 관찰되었다. 다음 중 환아에게 발생했을 가능성이 가장 높은 것은?",
        options: [
            "대동맥 역류(Aortic regurgitation)",
            "관상동맥 경화증(Coronary atherosclerosis)",
            "비세균혈전심내막염(Nonbacterial thrombotic endocarditis)",
            "폐고혈압(Pulmonary hypertension)",
            "제한심근병증(Restrictive cardiomyopathy)"
        ],
        answer: "4",
        image: "question_17.jpg"
    },
    {
        id: 62,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "허혈심장병, 고혈압, 판막질환 등에 의해 발병하며 폐부종, 폐출혈, 급성세뇨관괴사, 저산소뇌손상을 초래하는 질환은?",
        options: [
            "좌심부전(left-sided heart failure)",
            "우심부전(right-sided heart failure)",
            "급성심근경색증(myocardial infarction)",
            "비대심근병증(hypertrophic cardiomyopathy)",
            "대동맥류(aortic aneurysm)"
        ],
        answer: "1"
    },
    {
        id: 63,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "25세 남자가 자택에서 숨진 채 발견되었다. 부검 시 손톱 아래에 파편 출혈(splinter hemorrhages)이 관찰되었고, 심장 내막에 병변들이 보였다. 가장 가능성이 높은 질환은?",
        options: [
            "심근염(Myocarditis)",
            "류마티스심장병(rheumatic heart disease)",
            "감염심내막염(infective endocarditis)",
            "섬유성 심낭염(Fibrinous pericarditis)",
            "카르시노이드심장병(carcinoid heart disease)"
        ],
        answer: "3",
        image: "question_18.jpg"
    },
    {
        id: 64,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "승모판막소엽이 수축기 동안 좌심방 쪽으로 부풀어 탈출하여 승모판 역류의 가장 흔한 원인이 되는 질환은?",
        options: [
            "승모판탈출증(mitral valve prolapse)",
            "감염심내막염(infective endocarditis)",
            "비세균혈전심내막염(nonbacterial thrombotic endocarditis)",
            "리브만-삭스 심내막염(Libman-Sacks endocarditis)",
            "카르시노이드심장병(carcinoid heart disease)"
        ],
        answer: "1"
    }
];
