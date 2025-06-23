import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star, Users, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = ({ onCreateProposal }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Thiago Consultoria</h1>
                <p className="text-sm text-gray-600">Soluções Empresariais</p>
              </div>
            </div>
            <Button 
              onClick={onCreateProposal}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Criar Nova Proposta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme Suas Ideias em
              <span className="text-primary block">Soluções de Sucesso</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Especialista em desenvolvimento de soluções empresariais personalizadas que impulsionam o crescimento do seu negócio. 
              Propostas profissionais, resultados extraordinários.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={onCreateProposal}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Criar Proposta Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-gray-500">✨ Gratuito • Sem cadastro • Resultado imediato</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Por Que Sua Empresa Precisa Dessas Soluções AGORA? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por Que Sua Empresa Precisa Dessas Soluções <span className="text-primary">AGORA?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O mercado não espera. Enquanto você hesita, seus concorrentes estão se posicionando à frente. 
              Cada dia sem uma solução adequada é uma oportunidade perdida.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Urgência Competitiva</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Seus concorrentes já estão investindo em soluções inovadoras. 
                    Não fique para trás - o momento de agir é agora.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">ROI Imediato</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Soluções que se pagam em semanas, não meses. 
                    Cada dia de implementação é um dia a mais de retorno sobre investimento.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Expertise Comprovada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Anos de experiência transformando desafios empresariais em oportunidades de crescimento. 
                    Resultados garantidos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefícios Que Transformam Seu Negócio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções personalizadas que entregam resultados mensuráveis e duradouros para sua empresa.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: "📈", title: "Aumento de Produtividade", desc: "Até 40% de melhoria nos processos" },
              { icon: "💰", title: "Redução de Custos", desc: "Economia média de 25% em operações" },
              { icon: "⚡", title: "Implementação Rápida", desc: "Resultados visíveis em 2-4 semanas" },
              { icon: "🎯", title: "Soluções Personalizadas", desc: "100% adaptadas ao seu negócio" }
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600">
              Resultados reais de empresas que confiaram em nossas soluções
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-3 gap-8"
          >
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
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto Para Transformar Seu Negócio?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Não deixe para amanhã o que pode revolucionar sua empresa hoje. 
              Crie sua proposta personalizada em menos de 5 minutos.
            </p>
            <Button 
              onClick={onCreateProposal}
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Criar Minha Proposta Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm mt-4 opacity-75">⚡ Resposta em até 24 horas • 🎯 100% Personalizada</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Thiago Consultoria</h3>
                  <p className="text-sm text-gray-400">Soluções Empresariais</p>
                </div>
              </div>
              <p className="text-gray-400">
                Especialista em desenvolvimento de soluções empresariais que transformam desafios em oportunidades de crescimento.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 contato@thiagoconsultoria.com</p>
                <p>📱 (11) 99999-9999</p>
                <p>📍 São Paulo, SP</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <div className="space-y-2 text-gray-400">
                <p>• Consultoria Empresarial</p>
                <p>• Desenvolvimento de Soluções</p>
                <p>• Otimização de Processos</p>
                <p>• Transformação Digital</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Thiago Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

