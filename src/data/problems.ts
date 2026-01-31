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
        question: "5세 남아가 또래만큼 활동적이지 않고, 9개월 전부터는 운동 후에 심한 호흡곤란을 보인다며 내원하였다. 신체검사 상 체온 36.9℃, 맥박 81/min, 호흡수 19/min, 혈압 95/60 mmHg이다. 청진 시 범수축기 심잡음(holosystolic murmur)이 크게 들렸고, 양쪽 폐에서 수포음(crackles)이 들렸다. 가슴 X-ray에서 왼쪽 심장 경계면이 두드러져 있고 양쪽 폐 울혈 및 흉막 삼출소견이 관찰되었다. 환아 심장의 육안 소견이다. 다음 중 환아에게 발생했을 가능성이 가장 높은 것은?",
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
        answer: "3"
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
            "BRAF",
            "KRAS",
            "ALK",
            "ErbB-2",
            "EGFR"
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
        question: "당뇨병 병력이 있는 40세 남자가 지난 주 동안 복통이 악화되어 내원하였다. 신체검사 상 체온 36.9°C, 맥박 77/분, 호흡 16/분, 혈압 135/85 mmHg였다. 복부 CT 소견은 아래 사진과 같다. 혈액 검사 상 hemoglobin A1c는 10.5%였다. 다음 중 이 환자에서 질환을 초래했을 가능성이 가장 높은 원인?",
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
        question: "30세 여자가 5개월 전부터 오른쪽 눈의 시력이 떨어지고 양쪽 팔이 차갑고 감각이 둔해진다며 내원하였다. 의학적 검사소견은 다음과 같다. 체온 36.7°C, 혈압 100/70mmHg, 요골동맥의 맥박(radial pulses)은 촉진되지 않았으나 대퇴동맥의 맥박(femoral pulses)은 강하게 느껴졌다. 양팔의 감각은 떨어지고 청색증이 관찰되었지만 붓거나 열감은 없었다. 혈액검사에서 당 74mg/dL, creatinine 1mg/dL 총 cholesterol 165mg/dL, ANA(anti-nuclear antibody) test는 음성이었다. 가장 의심되는 질환은?",
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
        question: "3세 여아 2일 전부터 열나고 손, 발이 붓고 붉어져 내원했다. 신체검사에서 체온 37.8°C, 피부가 벗겨지는 발진, 입과 손바닥, 발바닥은 붉고 손, 발은 부어 있으며, 목 주변 림프절 종창이 관찰되었다. 환아의 증상은 면역글로불린요법으로 호전되었다. 만이루이 질환을 치료하지 않는다면 발생할 가능성이 가장 높은 합병증은?",
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
        question: "40세 남자가 다수의 피부결절이 생겨서 내원하였다. 환자는 8년 전부터 신장이식으로 면역억제제 치료를 받고 있었고, HHV-8 (human herpesvirus-8)에 양성을 보였다. 환자의 피부병변 사진과 일부 병변을 절제하여 제작한 현미경 소견은 아래 사진과 같다. 가장 가능성이 높은 진단?",
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
        question: "평소 건강했던 49세 여자가 지난 6개월 동안 4차례나 갑자기 의식을 잃고 쓰러졌다. 3번은 단 몇 분간만 의식이 없었는데 1개월 전 4번째 쓰러졌을 때에는 6시간 동안 의식이 회복되지 않았고 의식회복 후에도 왼쪽 팔에 힘이 빠지고 말을 제대로 하지 못했다. 신체검사에서 체온과 혈압은 정상이었고 경동맥 초음파는 특이소견은 관찰되지 않았다. 가장 가능성이 높은 질환은?",
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
        question: "유소아에서 가장 흔한 심장종양으로 그림과 같이 거미세포(spider cell)를 특징으로 보이는 종양?",
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
        question: "12세 소년이 열나고 목이 따가워 3주 전에 내원했었다. 당시 인후 배양검사에서 group A β-hemolytic streptococcus)가 검출되었다. 현재는 체온 36.6°C, 심박동수 85/min, 호흡수 18/min, 혈압 90/50 mmHg이다. 청진 시 양쪽 폐에 수포음(crackles)이 들렸다. 입원 2일째 급성 좌심실부전 증상과 심방세동이 여러 번 발생했다. 다음 중 좌심부전을 초래했던 원인으로 가장 가능성이 높은 것은?",
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
        question: "65세 여자가 2일 동안 점점 심해지는 호흡곤란이 발생하여 내원하였다. 입원 치료 중 갑자기 심정지로 사망하였다. 아래 사진은 부검 시 채취한 좌심실벽의 현미경소견이다. 가장 가능성이 높은 진단?",
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
        question: "전층심근경색증은 관상동맥의 폐쇄에 의한 이들의 분포영역에서 일어난다. 좌심실 후면, 하부와 심실중격의 후방 1/3에 심근경색증이 발생하였다면, 다음 중 폐쇄된 관상동맥은?",
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
        question: "86세 남자가 7년 전부터 심해지는 호흡곤란으로 운동하기도 힘들다며 내원하였다. 신체검사상 체온 36.5℃, 혈압 135/85 mmHg, 심박동수 76/min으로 불규칙했다. 흉부청진 시 양측 폐 하부에 수포음(crackles)이 들렸고, 가슴 X-선 촬영에서 경한 심장비대와 폐 울혈이 관찰되었다. 심장초음파 상에서 좌심실충만(left ventricular filling)이 감소해 있었다. 심근내막 생검(endomyocardial biopsy) 소견은 아래 사진과 같다. 다음 중 가장 가능성이 높은 진단은?",
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
        question: "61세 남자가 1년 전에 심근경색증을 앓았었는데 재발을 방지하기 위하여 운동과 식이요법을 병행하고 있다. 환자의 혈청에서 1년 전보다 수치가 감소되었을 것으로 기대되는 것은?",
        options: [
            "Cholesterol",
            "Glucose",
            "Potassium",
            "Renin",
            "Calcium"
        ],
        answer: "1"
    },
    {
        id: 57,
        subject: "기초순환호흡기학",
        type: "OBJECTIVE",
        question: "63세 남자가 갑작스럽게 쥐어짜는 듯한 흉통이 발생하여 내원하였다. 통증은 어깨로도 방사되었고, 30분 이상 지속되고 있다. 고혈압과 이상지질혈증의 병력이 있었다. 심전도에서 ST 상승, 혈액검사에서 CK-MB 및 Troponin I의 증가가 관찰되었다. 상기 증상을 초래했을 가능성이 가장 높은 원인은?",
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
        question: "대부분 죽상판의 파괴로 인한 혈전형성 및 혈관수축으로 인하여 휴식상태 혹은 경한 운동 시에도 흉통이 발생하나 15분 이상 지속되지는 않으며, 니트로글리세린(혈관확장제)에 잘 반응하지 않는 허혈심장병(ischemic heart disease)은?",
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
        question: "27세 여자가 정상적으로 만삭아를 분만하였다. 태아는 출생 직후부터 청색증이 나타나고 호흡곤란, 빈맥 및 수유곤란을 보이다 사망하였다. 부검으로 확인된 환아 심장의 육안소견이다. 가장 가능성이 높은 진단은?",
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
        question: "12세 남아가 축구경기 중 의식을 잃고 쓰러져 응급실로 후송되었다. 여러 차례 심폐소생술을 실시하였으나 사망했다. 부검으로 확인된 환아 심장의 육안소견이다. 가장 가능성이 높은 진단은?",
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
        question: "5세 남아가 술래잡기 놀이나 운동 후에 심한 호흡곤란을 보인다며 내원하였다. 신체검사 상 체온 36.9℃, 맥박 81/min, 호흡 19/min, 혈압 95/60 mmHg이었다. 청진 시 범수축기 심잡음이 크게 들렸고, 양쪽 폐에서 수포음(crackles)이 들렸다. 가슴 X-ray에서 왼쪽 심장 경계면이 두드러져 있고 양쪽 폐 울혈 및 흉막 삼출소견이 관찰되었다. 환아는 치료 중 사망하였고, 부검으로 확인된 환아 심장의 육안소견이다. 다음 중 환아에게 발생했을 가능성이 가장 높은 것은?",
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
        question: "허혈심장병, 고혈압, 대동맥판 또는 승모판질환, 심근질환에 의해 발병하는 질환으로 폐울혈, 폐출혈, 급성세뇨관괴사, 저산소뇌손상을 초래하는 질환은?",
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
        question: "25세 남자가 자택에서 숨진 채 발견되었다. 타살의 흔적이나 외상의 징후는 없었으나 집안 구석에서 주사기를 발견하였다. 부검 시 손톱 아래에 파편 출혈(splinter hemorrhages)이 관찰되었고, 심장 내막에 병변들이 보였다. 가장 가능성이 높은 질환은?",
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
        question: "판막조직의 점액변성 또는 유두근의 이상으로 인해 승모판막소엽이 펄럭거리며 늘어나 수축기동안에 좌심방쪽으로 부풀어 탈출하여 가장 흔한 승모판역류의 원인이 되는 질환은?",
        options: [
            "승모판탈출증(mitral valve prolapse)",
            "감염심내막염(infective endocarditis)",
            "비세균혈전심내막염(nonbacterial thrombotic endocarditis)",
            "리브만-삭스 심내막염(Libman-Sacks endocarditis)",
            "카르시노이드심장병(carcinoid heart disease)"
        ],
        answer: "1"
    },
    {
        id: 1,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "53세 여성이 신체적 및 정신적인 무기력감을 주소로 내원하였다. 이 전에는 운동도 좋아하고 활동적인 사람이었으나, 2년 전부터 자주 피곤해하고 추위를 참지 못하여 여름에도 옷을 두껍게 입는다. 신체적인 활동이 줄어서 2년 전에 비해 체중이 5kg 증가하였다. 과거력상 3년 전에 갑상샘유두암종으로 수술을 받은 적이 있다. 이학적 소견상 피부가 전체적으로 건조하고 거칠어 보였다. 검사실소견상 TSH가 증가하고 T4는 감소하였다. 진단은 무엇인가?",
        options: [
            "Hashimoto's thyroiditis (하시모토갑상샘염)",
            "Myxedema (점액부종)",
            "Cretinism (크레틴병)",
            "Graves disease (그레이브스병)",
            "Subacute lymphocytic thyroiditis (아급성림프구갑상샘염)"
        ],
        answer: "2",
    },
    {
        id: 2,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "26세 여성이 최근 물체가 두 개로 겹쳐 보인다고 내원하였다. 이학적 검사상 환자는 마른 편이었으며 혈압 140/75 mmHg, 맥박 103/min. 호흡수 28/min, 체온 37.5° C 이었다. 양측 안구가 돌출되어 있고, 갑상샘이 전체적으로 커져있었다. 환자는 문진과 검사 중에 자주 조급함과 불안한 모습을 보였다. 검사소견상 갑상샘 전반에 방사성요오드의 섭취가 증가하였다. 아래의 소견 중 이 환자와 가장 관련 있을 것으로 예상되는 것은 무엇인가?",
        options: [
            "갑상샘자극호르몬에 대한 자가항체의 증가",
            "갑상샘과산화효소(thyroid peroxidase)에 대한 자가항체 증가",
            "부소포세포의 광범위한 증식",
            "혈중 칼슘의 감소",
            "갑상샘자극호르몬의 감소"
        ],
        answer: "1",
    },
    {
        id: 3,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "갑상샘에 발생하는 종양에 대한 설명이다. 맞는 것을 2가지 고르시오.",
        options: [
            "다발성 종괴로 나타나는 경우 종양성 병변의 확률이 더 높다.",
            "호르몬을 분비하는 기능성 결절은 양성보다 악성종양의 확률이 더 높다.",
            "갑상샘의 악성종양 중 유두암종이 가장 흔한 유형이다.",
            "세침흡인세포검사로 소포샘종(follicular adenoma)와 소포암종(follicular carcinoma)을 구분할 수 없다.",
            "갑상샘의 수질암종은 소포세포에서 기원한다."
        ],
        answer: "3,4",
    },
    {
        id: 4,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "다음의 보기 중 갑상샘의 전형적 유두암종과 관련된 것을 2가지 고르시오.",
        options: [
            "요오드 등 영양의 개선으로 지난 30년간 발생빈도가 감소하였다.",
            "20세 이전의 어린 나이에 방사선에 노출된 경우 발생위험이 높아진다.",
            "가장 흔한 발병기전은 RAS계의 돌연변이이다.",
            "핵의 변화는 진단에 가장 중요한 소견이다.",
            "유두상 증식증과 악성 유두암종을 구분하는 기준은 피막과 혈관의 침습 여부이다."
        ],
        answer: "2,4",
    },
    {
        id: 5,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "만성신부전을 앓고 있는 68세 남성이다. 이학적 검사에서는 특이사항이 없었으나 검사실 소견상 혈청내 creatinine 4.9 mg/dL, BUN 45 mg/dL로 증가하여 있고 복부 CT상 신장의 크기가 감소하여 있다. 이 환자에서 이차적으로 나타날 수 있는 내분비계 이상은 무엇인가?",
        options: [
            "Thyroid C cell hyperplasia",
            "Hyperthyroidism",
            "Parathyroid hyperplasia",
            "Pituitary adenoma",
            "Islet cell hyperplasia"
        ],
        answer: "3",
    },
    {
        id: 6,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "40세 남자가 뱃살이 나오고 물건을 꽉 쥐지 못하며 성욕이 감소하여 병원에 왔다. 목 앞 및 배 사진이다. 혈압은 150/90mmHg였다. 혈액검사 결과는 다음과 같았다. 가장 흔한 원인은?",
        options: [
            "스테로이드 과용",
            "부신피질 샘종",
            "부신피질 암종",
            "크롬친화세포종",
            "신경모세포종"
        ],
        answer: "1",
        image: "question_19.jpg"
    },
    {
        id: 7,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "66세 남자가 건강검진 초음파 검사에서 발견한 이자의 종물을 주소로 내원하였다. 환자는 이자 부분절제술을 시행하였고 그 검체의 대표적인 조직 사진은 다음과 같았다. 이 종양에 관한 설명 중 가장 옳은 것은?",
        options: [
            "이자의 신경내분비종양 중 가장 드물게 발생한다.",
            "이자의 알파세포에서 유래한 종양이다.",
            "아밀로이드 (amyloid)가 침착되는 것이 특징적인 현미경적 소견이다.",
            "다발성내분비종양증후군 2형에서 필수적인 종양이다.",
            "이 종양에서 분비되는 호르몬에 의해 위액이 많이 분비되고 궤양이 발생한다."
        ],
        answer: "3",
        image: "question_20.jpg"
    },
    {
        id: 8,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "33세 여성이 생리불순을 주소로 내원하였다. 환자는 둥그런 얼굴, 복부비만, 얇은 피부를 보였고 고혈압이었다. 혈액검사에서 혈중 글루코코르티코이드 (glucocorticoid) 수치가 높게 나타났다. 이 질환에 대한 설명으로 틀린 것은?",
        options: [
            "스테로이드를 복용한 경우 부신겉질의 위축을 보인다.",
            "ACTH-의존성과 ACTH-비의존성 증후군으로 나눌 수 있다.",
            "부신겉질 (adrenal cortex)의 종양이나 과증식이 원인일 수 있다.",
            "뇌하수체에 부신겉질자극호르몬을 생성하는 기능성 종양이 관찰될 수 있다.",
            "ACTH-비의존성 증후군의 혈장 코티졸 (cortisol)과 ACTH의 분비가 동시에 증가한다."
        ],
        answer: "5",
    },
    {
        id: 9,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "45세 남자가 3개월 전 발생한 고혈압으로 왔다. 고혈압의 원인을 찾던 중 부신 (adrenal gland)에 크기 2.5cm의 종물을 발견하여 수술하였다. 덩이의 절단면은 아래 왼쪽의 사진과 같고 현미경 사진은 아래 오른쪽의 사진과 같았다. 이 종양에 관한 설명 중 가장 옳은 것은?",
        options: [
            "부신에서 가장 흔하게 발생하는 종양이다.",
            "이 종양은 조직학적 특징과는 상관없이 모두 악성으로 분류된다.",
            "이 종양이 산발적으로 발생한 경우 90%에서 양측성으로 나타난다.",
            "이 종양의 대부분은 생식세포 돌연변이 (germline mutation)를 보인다.",
            "이 종양은 고혈압뿐만 아니라 여성에게 발생할 경우 남성화 (virilism)를 유발한다."
        ],
        answer: "2",
        image: "question_21.jpg"
    },
    {
        id: 10,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "34세 남자가 2개월 전부터 자주 머리가 아프고 식은땀이 나서 병원에 왔다. 체온 36.5℃, 혈압 160/90 mmHg, 맥박 110회/분, 호흡 18회/분 이었다. 혈액검사이다(알도스테론 8 ng/dL, 코티솔 12 ug/dL, 메타네프린 250 pg/mL). 복부컴퓨터단층촬영에서 우측 부신 종괴가 발견되어 절제하였다. 종괴의 현미경소견이다. 진단은?",
        options: [
            "스테로이드 과용",
            "부신피질 샘종",
            "부신피질 암종",
            "크롬친화세포종",
            "신경모세포종"
        ],
        answer: "4",
        image: "question_22.jpg"
    },
    {
        id: 11,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "38세 여자가 전신 쇠약감을 주소로 내원하였다. 병원 방문하여 시행한 혈액 검사소견에서 공복혈당 38 mg/dL, 인슐린 29.5 IU/mL (6-27). 혈청 칼슘 11.0 mg/dL (8.4-10.2), 이온화 칼슘 5.7 mg/dL (4.2-5.4), 인 2.5 mg/dL (2.7-4.5), 부갑상선호르몬 71 pg/mL (8-62)로 측정되었다. 복부 전산화 단층 촬영에서 췌장 미부에 2cm 및 1.6cm 크기의 종괴 두 개가 보였고, 부갑상선 스캔에서 우측 하부의 섭취 증가소견을 보였으며, 터키안 자기공명촬영에서 뇌하수체 선종이 의심되었다. 가족력 상 남동생이 인슐린종으로 두 차례 수술 받은 병력이 있었다. 이 환자에서 확인해야 할 돌연변이 유전자로 가장 적절한 것은?",
        options: [
            "RET",
            "CYP21A2",
            "MEN1",
            "KCNJ5",
            "NF1"
        ],
        answer: "3",
    },
    {
        id: 12,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "38세 여성이 갑상샘 종물을 주소로 내원하였다. 세침흡인검사 후 갑상샘 절제술을 시행하였다. 육안 검사에서 한 개의 침윤하는 결절이 발견되었다. 결절을 대표하는 현미경 사진은 아래와 같았다. 이 병변에 대한 설명 중 관련이 적은 것은?",
        options: [
            "요오드가 부족한 지역에서 흔히 발생한다.",
            "혈관을 통한 침윤보다는 림프관을 통한 침윤이 흔하다.",
            "갑상샘에서 발생하는 일차성 암종 중에는 가장 흔하다.",
            "조직학적 소견에서 핵내의 고랑과 거짓봉입체가 특징적이다.",
            "이 암종에서 보이는 BRAF 유전자 변이는 나쁜 예후와 관련이 있다."
        ],
        answer: "1",
        image: "question_23.jpg"
    },
    {
        id: 13,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "45세 남자가 3개월 전 발생한 고혈압으로 왔다. 고혈압의 원인을 찾던 중 부신에 크기 2.5cm의 덩이를 발견하여 수술하였다. 덩이의 절단면은 아래 왼쪽의 사진과 같고 현미경 사진은 아래 오른쪽의 사진과 같았다. 이 종양에 관한 설명 중 가장 옳은 것은?",
        options: [
            "부신 겉질에서 가장 흔하게 발생하는 종양이다.",
            "이 종양의 10%는 부신 외의 장소에서 발생한다.",
            "버팀세포를 크롬친화세포가 둘러싸고 있는 세포 공 구조를 보인다.",
            "이 종양이 산발적으로 발생한 경우 90%에서 양측성으로 나타난다.",
            "이 종양의 악성과 양성을 나누는 기준은 주변 조직으로의 침윤이다."
        ],
        answer: "2",
        image: "question_24.jpg"
    },
    {
        id: 14,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "26세 여성이 유즙 분비와 무월경을 주소로 내원하였다. 환자는 임신을 하지 않은 상태였고 뇌 CT에서 장경 1cm 크기의 경계가 좋은 종물이 발견되었다. 절제술을 통해 얻은 조직의 대표적인 현미경 사진은 다음과 같았다. 이 질환에 대한 설명 중 가장 옳은 것은?",
        options: [
            "소아에서 발생할 경우, 거인증으로 나타난다.",
            "진단될 때 다른 장기로의 전이가 흔히 관찰된다.",
            "레티쿨린망이 유지되는 것이 정상 조직과의 감별점이다.",
            "기능성 종양일 경우 관련된 부신호르몬에 의한 증상이 동반된다.",
            "남성이나 폐경 후의 여성보다 가임기 여성에서 더 쉽게 진단된다."
        ],
        answer: "5",
        image: "question_25.jpg"
    },
    {
        id: 15,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "다발성내분비종양증후군 2형에 대한 설명으로 가장 옳은 것은?",
        options: [
            "MEN1 유전자의 변이로 발생한다.",
            "십이지장의 가스트린종이 흔히 동반된다.",
            "부갑상샘, 이자, 뇌하수체의 병변으로 나타난다.",
            "2A형일 경우, 갑상샘 속질암종이 대부분의 환자에서 발견된다.",
            "2B형일 경우, 부갑상샘의 증식으로 인한 콩팥돌이 발견된다."
        ],
        answer: "4",
    },
    {
        id: 16,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "51세 여성이 요통을 주소로 내원하였다. 방사선 검사 결과 척추의 골절이 관찰되었고 골다공증으로 진단되었다. 혈액 검사에서 환자의 혈중 부갑상샘호르몬의 농도가 높게 측정되었다. 이 질환에 대한 설명으로 알맞지 않은 것은?",
        options: [
            "일차성일 경우, 샘종이 가장 흔한 원인이다.",
            "이차성일 경우, 만성콩팥기능상실이 기저질환으로 있는 경우가 흔하다.",
            "삼차성일 경우, 만성적인 저칼슘혈증이 교정된 후에 발생한다.",
            "뼈의 질환이나 콩팥돌증의 증상을 보인다.",
            "비정형 세포와 유사분열이 다수 관찰되는 것이 악성 종양의 진단기준이다."
        ],
        answer: "5",
    },
    {
        id: 17,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "45세 여성이 갑상샘 부위가 부어오르고 단단해져 이물감을 느껴 병원에 왔다. 환자는 만성적인 피로감을 호소했으며 식욕이 없어도 체중이 증가하였고 추위를 많이 탄다고 하였다. 초음파 검사에서 양쪽 갑상샘의 크기가 증가하였지만 갑상샘의 피막은 온전하였고 뚜렷한 종물은 발견되지 않았다. 갑상샘에서 시행한 침생검 조직의 대표적인 현미경 사진은 다음과 같았다. 이 질환에 대한 설명으로 가장 옳은 것은?",
        options: [
            "갑상샘 속질암종의 선행병변이다.",
            "자가면역질환의 일종으로 설명된다.",
            "다핵거대세포가 특징적인 조직학적 소견이다.",
            "바이러스 감염으로 인해 염증 반응이 유발된다.",
            "주변 조직과의 유착이 심해서 악성 종양으로 오인된다."
        ],
        answer: "2",
        image: "question_26.jpg"
    },
    {
        id: 18,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "부신의 정상 구조에 대한 설명 중 틀린 것은?",
        options: [
            "부신은 겉질과 속질로 나뉜다.",
            "부신은 양 쪽 콩팥 위에 하나씩 위치한다.",
            "부신 속질은 사구체층, 다발층, 그물층으로 나뉜다.",
            "부신 속질은 크롬친화세포와 버팀세포 등으로 이루어진다.",
            "부신 겉질은 단면의 색이 선명한 노란색을 보이고 속질은 갈색으로 보인다."
        ],
        answer: "3",
    },
    {
        id: 19,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "36세 여자가 출산 후 월경이 없고 모유가 나오지 않으며 추위를 많이 타고 피곤하여 병원에 왔다. 환자는 출산할 때 출혈이 심하여 수혈을 받은 적이 있었다. 여러 검사 후 뇌하수체 병변이 의심되었다. 가장 알맞은 진단명은?",
        options: [
            "쉬한 증후군",
            "뇌하수체 샘종",
            "뇌하수체 암종",
            "뇌하수체 내 출혈",
            "라스케틈새주머니"
        ],
        answer: "1",
    },
    {
        id: 20,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "33세 여자 환자가 약물로 조절되지 않는 고혈압, 근력저하, 경련을 주소로 내원하였다. 환자는 20세부터 고혈압이 있었으며 진단 검사에서 혈장 알도스테론/레닌 활성도 비율이 높아져 있었다. 환자는 초음파 검사와 전산화 단층 촬영을 통해 오른쪽 부신의 종양을 발견하였다. 환자는 오른쪽 부신절제술을 시행받았고 그 검체의 사진과 대표적인 조직 사진은 아래와 같았다. 이 종양에 관한 설명 중 옳은 것은?",
        options: [
            "대부분의 이 종양은 다발성으로 나타난다.",
            "기능성 샘종은 남성화 증상이 주로 나타난다.",
            "기능성 샘종의 주변 피질은 위축없이 잘 보존된다.",
            "기능성 샘종과 비기능성 샘종은 조직학적으로 잘 구분된다.",
            "대부분의 샘종은 비기능성으로 증상이 없거나 우연히 발견된다."
        ],
        answer: "5",
        image: "question_27.jpg"
    },
    {
        id: 21,
        subject: "기초내분비학",
        type: "OBJECTIVE",
        question: "29세 여자 환자가 목의 종물과 안구 돌출, 종아리의 피부가 비늘 모양으로 두꺼워지는 것을 주소로 내원하였다. 진단 검사 결과 free T3와 T4가 증가하였고 갑상샘자극호르몬은 감소하였다. 환자는 갑상샘전절제술을 시행 받았고 그 검체의 사진과 대표적인 현미경사진은 아래와 같았다. 이 질환에 관한 설명 중 옳은 것은?",
        options: [
            "주로 성인 남성에게 발생한다.",
            "내인성 갑상샘과다증의 가장 흔한 원인이다.",
            "요오드가 부족한 산악지역에서 많이 발생한다.",
            "결절을 잘 만들기 때문에 종양으로 자주 오인된다.",
            "조직학적으로 섬유혈관성 코어가 있는 유두상이 잘 보인다."
        ],
        answer: "2",
        image: "question_28.jpg"
    },
    {
        id: 1,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "태어난 지 3일째 되는 신생아이다. 먹은 것을 토하였고, 지금까지 대변을 제대로 보지 못하였다고 한다. 진찰소견상 열은 없으나, 영상학적 검사상 S결장 하부의 좁아진 부위를 제외하고 상부 대장이 확장되어 있었다. 수술시 좁아진 장벽을 동결절편하여 관찰하였을 때 신경절 세포(ganglion cell)가 관찰되지 않았다. 진단은 무엇인가?",
        options: [
            "Hirschsprung's disease",
            "Ulcerative colitis",
            "Crohn's disease",
            "Meckel's diverticulum",
            "Imperforated anus"
        ],
        answer: "1",
    },
    {
        id: 2,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "57세 여성이 식사 후 1시간정도 명치끝이 따갑다며 내원하였다. 상부위장관 내시경검사시 하부 식도에서 발적이 관찰되어 조직검사를 하였다. 현미경소견상 식도상피의 기저층이 증식되어 있고, 일부에서는 편평상피가 술잔세포(goblet cell)를 포함한 장상피로 대치되어 있었다. 이 질환에 대한 설명으로 맞는 것을 고르시오.",
        options: [
            "서구에 비해 국내에서의 발병율이 더 높다.",
            "고위험성 HPV에 의해 발생하는 전암병변이다.",
            "식도 편평세포암종의 위험이 증가하므로, 정기적인 내시경적 추적관찰이 중요하다.",
            "만성 역류성 식도염의 합병증 중의 하나이다.",
            "간경환증환자에서 식도출혈의 주된 원인이다."
        ],
        answer: "4",
    },
    {
        id: 3,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "건강검진으로 위내시경검사를 받은 45세 남성이다. 위방(antrum)에 부기와 충혈이 보였고, 조직검사상 만성염증세포와 함께 중성구의 침윤이 관찰되었다. 위점막상피세포의 표면은 좀이 뜯어먹은 것처럼 불규칙하고, Warthin-Stary 염색상 나선형세균이 관찰되었다. 이 질환에 대한 설명으로 맞는 것을 고르시오.",
        options: [
            "원인균은 혈액과 혈액부산물 수혈을 통해 전파된다.",
            "CagA (독소관련단백질)과 VacA(공포형성독소)를 통해 위점막상피세포를 손상시킨다.",
            "벽세포가 파괴되고 혈중 가스트린이 상승한다.",
            "합병증으로 악성빈혈이 발생한다.",
            "다른 자가면역병이 동반된다."
        ],
        answer: "2",
    },
    {
        id: 4,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "소화성궤양의 위험인자이다. 해당되지 않는 것을 고르시오.",
        options: [
            "헬리코박터감염",
            "아스피린",
            "흡연",
            "졸링거엘리슨증후군 (Zollinger-Ellison syndrome)",
            "자가면역위염"
        ],
        answer: "5",
    },
    {
        id: 5,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "위샘암종에 대한 설명이다. 맞는 것을 고르시오.",
        options: [
            "장형 샘암종은 CDH1유전자의 돌연변이와 이에 따른 E-cadherin의 감소로 발생한다.",
            "조기위암(early gastric carcinoma)은 림프절 전이가 없는 샘암종을 의미한다.",
            "헬리코박터 및 전구병터에 대한 적극적인 치료 등을 통하여 장형 샘암종의 발생빈도가 줄어들었다.",
            "조기위암에서 헬리코박터의 제균으로 종양 크기가 줄어들기도 한다.",
            "진행위암이란 원격전이가 동반된 샘암종을 말한다."
        ],
        answer: "3",
    },
    {
        id: 6,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "57세 남성의 위장에 점막하종괴가 관찰되어 조직검사를 하였다. 종양은 방추혈세포로 구성되었으며 c-kit에 양성을 보였다. 이 종양의 예후와 관련된 인자를 2가지 고르시오.",
        options: [
            "종양의 침윤두께",
            "종양의 크기",
            "종양내 유사분열의 수",
            "괴사",
            "근층침범정도"
        ],
        answer: "2,3",
    },
    {
        id: 7,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "문액고혈압(portal hypertension)을 보이는 환자에서 추후 발생할 수 있는 합병증이다. 가장 가능성이 낮은 것은 무엇인가?",
        options: [
            "식도정맥류",
            "비장비대",
            "복수",
            "간성뇌병증",
            "심근경색"
        ],
        answer: "5",
    },
    {
        id: 8,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "간이 손상을 받으면 쿠퍼세포, 단핵구 등 다양한 세포에서 나오는 염증성 사이토카인이 ( )를 활성화시킨다. 활성화된 ( )는 근섬유모세포로 전환되고 세포외기질을 생산하여 간의 섬유화에 기여한다. 해당되는 세포는 무엇인가?",
        options: [
            "Stem cell",
            "Sinusoidal endothelial cell",
            "Vascular smooth muscle cells",
            "Stellate cells",
            "Biliary epithelial cells"
        ],
        answer: "4",
    },
    {
        id: 9,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "35세 여성이 눈의 색이 이상하다며 내원하였다. 2주 전부터 몸이 나른하고 약간의 구역감이 있다고 하였다. 진찰소견상 눈의 공막이 노랗게 변하였고, 혈청학적 검사상 AST 77 IU/L, ALT 95 IU/L, IgG anti-HAV (+), anti-HCV(-), HBsAg(+)였다. 3개월 후 검사에서 HBsAg(-), Anti-HBsAb(+)으로 확인되었다. 환자의 상태에 해당하는 것을 고르시오.",
        options: [
            "HAV에 의한 급성간염",
            "HBV에 의한 급성간염",
            "HBV에 의한 급성간염 후 회복",
            "HAV에 의한 만성간염",
            "HBV에 의한 만성간염"
        ],
        answer: "3",
    },
    {
        id: 10,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "다양한 원인에 의한 간손상 혹은 질환의 예이다. 연결이 맞게 조합된 것을 2개 고르시오.",
        options: [
            "Alcohol: steatosis, perivenular fibrosis, Mallory bodies",
            "HAV: chronic hepatitis with lymphoid follicles in portal tracts",
            "Acetoaminophen: hepatocellular carcinoma",
            "Vinyl chroride: angiosarcoma",
            "Metabolic syndrome: cholangiocarcinoma"
        ],
        answer: "1,4",
    },
    {
        id: 11,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "다음 중 장폐색의 4대 원인중 하나는?",
        options: [
            "장의 점막과 근층에 걸친 경색",
            "비감염결장염",
            "젖당분해효소결핍",
            "탈장",
            "거짓막대장염"
        ],
        answer: "4",
    },
    {
        id: 13,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "다음 중 Crohn disease의 설명으로 옳은 것은?",
        options: [
            "분절침범",
            "직장 침범이 항상 발생",
            "거짓 폴립",
            "점막과 점막 밑층 침범",
            "육아종은 드물게 발견된다."
        ],
        answer: "1",
    },
    {
        id: 14,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "다음은 MSI(미소부수체불안정)가 있는 대장암의 설명이다. 틀린 것은 무엇인가?",
        options: [
            "예후가 좋다.",
            "팽창성 성장을 보인다.",
            "조직학적으로 점액성인 경우가 흔하다.",
            "종양의 상피 내 림프구가 보인다.",
            "좌측 대장에 흔히 발생한다."
        ],
        answer: "5",
    },
    {
        id: 15,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "28세 남성으로 최근 피로감과 식욕감퇴가 심해져 내원하였다. 검사소견상 AST와 ALT가 증가하였다. 간염바이러스와 자가항체는 음성이며 혈청내 세룰로플라즈민이 감소하였다. 간조직검사에서 지방축적과 만성간염의 소견을 보였으며, 로오다닌염색시 간세포질에 붉은색의 침착이 관찰되었다. 이 질환의 근본적인 문제는 무엇인가?",
        options: [
            "철대사장애",
            "구리대사장애",
            "빌리루빈대사장애",
            "콜레스테롤대사장애",
            "포도당대사장애"
        ],
        answer: "2",
    },
    {
        id: 16,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "황달로 내원한 54세 여성이다. 혈청내 총빌리루빈이 8mg/dl(정상: 2~2.5mg/dl)였고, 대부분은 결합빌리루빈이었다. 기저질환으로 가장 우선적으로 고려해야 할 것은 무엇인가?",
        options: [
            "용혈빈혈",
            "악성빈혈",
            "길버트증후군(Gilbert SD)",
            "담석에 의한 담관폐쇄",
            "간경화증"
        ],
        answer: "4",
    },
    {
        id: 17,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "복통으로 내원한 35세 여성이다. 영상학적 검사시 간에 장경 2cm의 종괴가 관찰되었다. 종괴 이외에 간의 나머지부분에는 특이 소견이 없었다. 조직검사상 1~2층의 간세포를 닮은 세포로 구성되었고, 문맥역이나 담관구조는 관찰되지 않았다. 이 병변의 형성과 관련된 인자를 고르시오.",
        options: [
            "비정상적인 혈류흐름",
            "경구피임제",
            "B형 간염바이러스",
            "C형 간염바이러스",
            "장기간의 기생충감염"
        ],
        answer: "2",
    },
    {
        id: 18,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "B형 간염바이러스에 의한 만성간염과 간경화증으로 치료중인 56세 남자이다. 최근 시행한 영상소견에서 간에 장경 3.0cm의 종괴가 관찰되었다. 조직검사상 간세포를 닮은 세포가 3층 이상으로 두꺼워져 있고, 일부에서 샘을 닮은 구조를 형성하였다. 진단은 무엇인가?",
        options: [
            "초점결절증식 (Focal nodular hyperplasia)",
            "간세포샘종 (Hepatocellular adenoma)",
            "간모세포종 (Hepatoblastoma)",
            "간세포암종 (Hepatocellular carcinoma)",
            "담관암종 (Cholangiocarcinoma)"
        ],
        answer: "4",
    },
    {
        id: 19,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "55세 여성으로 가려움증과 황달로 내원하였다. 혈액검사상 alkaline phosphatase가 상승하였고, 항미토콘드리아항체가 검출되었다. 조직검사상 간문액역에 단핵염증세포가 침윤되고 담관소실이 관찰되었다. 가장 우선적으로 고려해야 할 질환은 무엇인가?",
        options: [
            "Primary biliary cholangitis",
            "Secondary biliary cirrhosis",
            "Autoimmune hepatitis",
            "Wilson disease",
            "Dubin-Johnson syndrome"
        ],
        answer: "1",
    },
    {
        id: 20,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "담낭의 색소석(pigmented gallstone)의 위험인자는 무엇인가?",
        options: [
            "비만",
            "경구피임약",
            "담관감염",
            "고지혈증",
            "당뇨병"
        ],
        answer: "3",
    },
    {
        id: 21,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "만성췌장염에 대한 설명이다. 틀린 것을 고르시오.",
        options: [
            "가장 흔한 원인은 만성적인 음주이다.",
            "조직검사상 췌장실질세포의 소실과 섬유화가 관찰된다.",
            "췌장 전체에 광범위한 괴사와 출혈이 관찰된다.",
            "일부에서 합병증으로 거짓낭이 발생한다.",
            "PRSS-1 돌연변이를 가진 환자에서 발생한 만성췌장염에서 암종이 발생하기도 한다."
        ],
        answer: "3",
    },
    {
        id: 22,
        subject: "기초소화기학",
        type: "OBJECTIVE",
        question: "췌장관샘암종에 대한 설명이다. 맞는 것을 고르시오.",
        options: [
            "영상학적 소견산 낭성 종괴로 나타난다.",
            "가장 흔한 위험인자는 만성적인 음주이다.",
            "전암병변으로 거짓낭과 만성췌장염이 있다.",
            "분화가 좋은 저등급의 악성종양이다.",
            "KRAS, TP53, SMAD4 등 유전자의 변이가 관찰된다."
        ],
        answer: "5",
    }
];
