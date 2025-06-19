// Dados das etapas
const stepData = {
    step1: {
        title: "✅ Etapa 1: Levantamento e Briefing - Concluído",
        sections: [
            {
                title: "Tarefas Concluídas",
                items: [
                    { text: "Enviar proposta comercial", completed: true },
                    { text: "Realizar reunião inicial de alinhamento", completed: true },
                    { text: "Levantar informações e necessidades do cliente", completed: true },
                    { text: "Definir escopo do projeto", completed: true },
                    { text: "Validar prazos e entregas", completed: true }
                ]
            }
        ]
    },
    step2: {
        title: "✅ Etapa 2: Configurações Iniciais - Concluído",
        sections: [
            {
                title: "Tarefas Concluídas",
                items: [
                    { text: "Obter acesso à planilha Google Sheets", completed: true },
                    { text: "Obter acesso ao Zapier", completed: true },
                    { text: "Obter acesso ao AppSheet", completed: true }
                ]
            }
        ]
    },
    step3: {
    title: "✅ Etapa 3: Desenvolvimento - Concluído",
    sections: [
        {
            title: "Tarefas Concluídas",
            items: [
                { text: "17/06/2025 - Duplicação do Zap no Zapier para testes sem afetar o ambiente produtivo", completed: true },
                { text: "17/06/2025 - Duplicação da planilha, renomeada para 'Clients_Follow_UP_MIB' com aba 'ALLDATA'", completed: true },
                { text: "17/06/2025 - Atualização de fluxos no Zapier para os novos nomes", completed: true },
                { text: "17/06/2025 - Testes validados para envios de e-mails nas abas 'Client VIP' e 'Black List'", completed: true },
                { text: "17/06/2025 - Configuração do Zapier finalizada", completed: true },
                { text: "19/06/2025 -Validar a origem do Webhook no Zapier (confirmado)", completed: true },
                { text: "19/06/2025 - Confirmar o papel do AppSheet (painel validado)", completed: true },
                { text: "19/06/2025 - Realizar acesso ao AppSheet (acesso concluído)", completed: true },
                { text: "19/06/2025 - Implementar ajustes finais no fluxo", completed: true },
                { text: "19/06/2025 - Documentar o fluxo completo para o cliente", completed: true }
            ]
        }
    ]
},

step4: {
    title: "✅ Etapa 4: Testes - Concluído",
    sections: [
        {
            title: "Tarefas Concluídas",
                items: [
                    { text: "19/06/2025 - Realizar testes integrados com todas as ferramentas (Zapier, Google Sheets, AppSheet, Booknetic)", completed: false },
                    { text: "19/06/2025 - Validar notificações e alertas do Zapier", completed: false }
                ]
            }
        ]
    },
    step5: {
        title: "🏁 Etapa 5: Validação Final e Entrega - Pendente",
        sections: [
            {
                title: "Tarefas Pendentes",
                items: [
                    { text: "Revisão geral dos fluxos", completed: false },
                    { text: "Validação junto ao cliente", completed: false },
                    { text: "Entrega oficial do projeto", completed: false },
                    { text: "Envio de tutorial ou manual de uso para o cliente", completed: false },
                    { text: "Feedback e encerramento do projeto", completed: false }
                ]
            }
        ]
    }
};

// Função para abrir o modal da etapa
function openStepModal(stepId) {
    const modal = document.getElementById('stepModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    const step = stepData[stepId];
    if (!step) return;
    
    modalTitle.textContent = step.title;
    
    // Criar conteúdo do modal
    let modalContent = '';
    
    step.sections.forEach((section, index) => {
        modalContent += `
            <div class="expandable-section">
                <div class="section-header" onclick="toggleSection(${index})">
                    <h3>${section.title}</h3>
                    <i class="fas fa-chevron-down section-toggle" id="toggle-${index}"></i>
                </div>
                <div class="section-content" id="content-${index}">
                    <div class="checklist">
                        ${section.items.map(item => `
                            <div class="checklist-item ${item.completed ? 'completed' : 'pending'}">
                                <i class="fas ${item.completed ? 'fa-check-square' : 'fa-hourglass-half'}"></i>
                                <span>${item.text}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    });
    
    modalBody.innerHTML = modalContent;
    modal.style.display = 'block';
    
    // Adicionar animação de entrada
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// Função para fechar o modal
function closeStepModal() {
    const modal = document.getElementById('stepModal');
    modal.style.display = 'none';
}

// Função para alternar seções expansíveis
function toggleSection(index) {
    const content = document.getElementById(`content-${index}`);
    const toggle = document.getElementById(`toggle-${index}`);
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        toggle.classList.remove('expanded');
    } else {
        content.classList.add('expanded');
        toggle.classList.add('expanded');
    }
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('stepModal');
    if (event.target === modal) {
        closeStepModal();
    }
}

// Animação da barra de progresso quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.progress-bar');
    
    // Inicia com 0% e anima até 65%
    progressBar.style.width = '0%';
    
    setTimeout(() => {
        progressBar.style.width = '65%';
    }, 500);
});

// Função para animar a entrada dos elementos quando eles entram na viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.step-card, .update-item, .faq-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-in');
        }
    });
}

// Adiciona listener para scroll
window.addEventListener('scroll', animateOnScroll);

// Executa a animação inicial
document.addEventListener('DOMContentLoaded', animateOnScroll);

