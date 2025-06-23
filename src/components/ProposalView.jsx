import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Download, Share2, CheckCircle, Star, Clock, DollarSign, Calendar, User, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const ProposalView = ({ data, onBack }) => {
  const [currentDate, setCurrentDate] = useState('');
  const [validUntil, setValidUntil] = useState('');

  useEffect(() => {
    if (data) {
      const proposalDate = new Date(data.data);
      setCurrentDate(proposalDate.toLocaleDateString('pt-BR'));
      
      const validityDays = parseInt(data.validade) || 10;
      const validUntilDate = new Date(proposalDate);
      validUntilDate.setDate(validUntilDate.getDate() + validityDays);
      setValidUntil(validUntilDate.toLocaleDateString('pt-BR'));
    }
  }, [data]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: data.titulo,
        text: `Confira esta proposta comercial: ${data.titulo}`,
        url: url
      });
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copiado para a área de transferência!');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Proposta não encontrada</h2>
          <Button onClick={onBack}>Voltar ao Início</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header com ações */}
      <div className="bg-white shadow-sm border-b print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Button 
              onClick={onBack}
              variant="ghost" 
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            
            <div className="flex space-x-2">
              <Button 
                onClick={handleShare}
                variant="outline"
                size="sm"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
              <Button 
                onClick={handlePrint}
                variant="outline"
                size="sm"
              >
                <Download className="mr-2 h-4 w-4" />
                Imprimir/PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo da Proposta */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="bg-white rounded-lg shadow-xl overflow-hidden"
        >
          {/* Cabeçalho da Proposta */}
          <motion.div variants={fadeInUp} className="bg-primary text-white p-8">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">T</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Thiago Consultoria</h1>
                    <p className="text-primary-foreground/80">Soluções Empresariais</p>
                  </div>
                </div>
                <h2 className="text-4xl font-bold mb-2">{data.titulo}</h2>
                <p className="text-primary-foreground/90 text-lg">
                  Proposta comercial personalizada para {data.destinatario}
                </p>
              </div>
              <div className="text-right">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm text-primary-foreground/80">Proposta #</p>
                  <p className="text-lg font-bold">{data.id}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Informações da Proposta */}
          <motion.div variants={fadeInUp} className="p-8">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Consultor</p>
                  <p className="font-semibold">{data.consultor}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Data</p>
                  <p className="font-semibold">{currentDate}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Válida até</p>
                  <p className="font-semibold">{validUntil}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Building className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Cliente</p>
                  <p className="font-semibold">{data.destinatario}</p>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Nome do Projeto */}
            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📋 {data.nomeProjeto}</h3>
            </motion.div>

            {/* Descrição do Problema */}
            <motion.div variants={fadeInUp} className="mb-8">
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700 flex items-center">
                    <span className="mr-2">🎯</span>
                    Situação Atual e Desafios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {data.descricaoProblema}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Solução Proposta */}
            <motion.div variants={fadeInUp} className="mb-8">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <span className="mr-2">💡</span>
                    Nossa Solução
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {data.solucaoProposta}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefícios */}
            <motion.div variants={fadeInUp} className="mb-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700 flex items-center">
                    <span className="mr-2">✨</span>
                    Benefícios e Resultados Esperados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {data.beneficios}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Prazo e Valor */}
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700 flex items-center">
                      <Clock className="mr-2 h-5 w-5" />
                      Prazo de Entrega
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-blue-700">{data.prazoEntrega}</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700 flex items-center">
                      <DollarSign className="mr-2 h-5 w-5" />
                      Investimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-green-700">{data.valor}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Depoimentos */}
            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                O Que Nossos Clientes Dizem
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Maria Silva",
                    company: "TechCorp Ltda",
                    text: "A solução implementada pelo Thiago revolucionou nossos processos. Aumentamos nossa produtividade em 35% em apenas 3 semanas.",
                    rating: 5
                  },
                  {
                    name: "João Santos",
                    company: "Inovação Digital",
                    text: "Profissionalismo excepcional e resultados que superaram nossas expectativas. Recomendo sem hesitação.",
                    rating: 5
                  },
                  {
                    name: "Ana Costa",
                    company: "Crescimento Empresarial",
                    text: "O ROI foi imediato. Em 2 meses, já havíamos recuperado todo o investimento e continuamos crescendo.",
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 italic text-sm">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Perguntas Frequentes
              </h3>
              <div className="space-y-4">
                {[
                  {
                    question: "Como funciona o processo de implementação?",
                    answer: "Nosso processo é dividido em etapas claras: análise inicial, planejamento, desenvolvimento, testes e implementação. Você acompanha cada fase com relatórios detalhados."
                  },
                  {
                    question: "Há garantia nos resultados?",
                    answer: "Sim, oferecemos garantia de satisfação. Se os resultados não atenderem às expectativas acordadas, trabalhamos até que sejam alcançados, sem custo adicional."
                  },
                  {
                    question: "Qual o suporte pós-implementação?",
                    answer: "Incluímos 30 dias de suporte gratuito após a entrega. Também oferecemos planos de manutenção e suporte estendido conforme necessário."
                  },
                  {
                    question: "Posso fazer alterações durante o projeto?",
                    answer: "Sim, entendemos que necessidades podem mudar. Pequenos ajustes são inclusos, e alterações maiores são discutidas e orçadas separadamente."
                  }
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* CTA Final */}
            <motion.div variants={fadeInUp} className="text-center">
              <Card className="bg-primary text-white border-0">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-3xl font-bold mb-4">
                    Pronto Para Começar?
                  </h3>
                  <p className="text-xl mb-6 opacity-90">
                    Não perca mais tempo. Transforme seu negócio hoje mesmo.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      size="lg"
                      variant="secondary"
                      className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                    >
                      Aceitar Proposta
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
                    >
                      Falar com Consultor
                    </Button>
                  </div>
                  <p className="text-sm mt-4 opacity-75">
                    📞 (11) 99999-9999 • 📧 contato@thiagoconsultoria.com
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <div>
              <h3 className="font-bold">Thiago Consultoria</h3>
              <p className="text-sm text-gray-400">Soluções Empresariais</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2024 Thiago Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProposalView;

