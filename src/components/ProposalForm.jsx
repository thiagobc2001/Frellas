import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, FileText, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ProposalForm = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    destinatario: '',
    consultor: 'Thiago',
    data: new Date().toISOString().split('T')[0],
    validade: '10',
    nomeProjeto: '',
    descricaoProblema: '',
    solucaoProposta: '',
    beneficios: '',
    prazoEntrega: '',
    valor: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpar erro quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.titulo.trim()) newErrors.titulo = 'Título é obrigatório';
    if (!formData.destinatario.trim()) newErrors.destinatario = 'Destinatário é obrigatório';
    if (!formData.nomeProjeto.trim()) newErrors.nomeProjeto = 'Nome do projeto é obrigatório';
    if (!formData.descricaoProblema.trim()) newErrors.descricaoProblema = 'Descrição do problema é obrigatória';
    if (!formData.solucaoProposta.trim()) newErrors.solucaoProposta = 'Solução proposta é obrigatória';
    if (!formData.beneficios.trim()) newErrors.beneficios = 'Benefícios são obrigatórios';
    if (!formData.prazoEntrega.trim()) newErrors.prazoEntrega = 'Prazo de entrega é obrigatório';
    if (!formData.valor.trim()) newErrors.valor = 'Valor é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-8">
          <Button 
            onClick={onBack}
            variant="ghost" 
            className="mb-4 hover:bg-white/50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Criar Nova Proposta
            </h1>
            <p className="text-xl text-gray-600">
              Preencha os dados abaixo para gerar sua proposta comercial personalizada
            </p>
          </div>
        </motion.div>

        {/* Formulário */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Dados da Proposta</CardTitle>
              <CardDescription className="text-center">
                Todos os campos são obrigatórios para gerar uma proposta completa
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 bg-white rounded-b-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Linha 1: Título e Destinatário */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="titulo" className="text-sm font-semibold text-gray-700">
                      Título da Proposta *
                    </Label>
                    <Input
                      id="titulo"
                      name="titulo"
                      value={formData.titulo}
                      onChange={handleChange}
                      placeholder="Ex: Proposta de Consultoria Empresarial"
                      className={`transition-all duration-200 ${errors.titulo ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'}`}
                    />
                    {errors.titulo && <p className="text-red-500 text-sm">{errors.titulo}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="destinatario" className="text-sm font-semibold text-gray-700">
                      Destinatário (Nome do Cliente ou Empresa) *
                    </Label>
                    <Input
                      id="destinatario"
                      name="destinatario"
                      value={formData.destinatario}
                      onChange={handleChange}
                      placeholder="Ex: João Silva / Empresa XYZ Ltda"
                      className={`transition-all duration-200 ${errors.destinatario ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'}`}
                    />
                    {errors.destinatario && <p className="text-red-500 text-sm">{errors.destinatario}</p>}
                  </div>
                </div>

                {/* Linha 2: Consultor, Data e Validade */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="consultor" className="text-sm font-semibold text-gray-700">
                      Consultor
                    </Label>
                    <Input
                      id="consultor"
                      name="consultor"
                      value={formData.consultor}
                      onChange={handleChange}
                      placeholder="Thiago"
                      className="focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="data" className="text-sm font-semibold text-gray-700">
                      Data
                    </Label>
                    <Input
                      id="data"
                      name="data"
                      type="date"
                      value={formData.data}
                      onChange={handleChange}
                      className="focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="validade" className="text-sm font-semibold text-gray-700">
                      Validade (dias)
                    </Label>
                    <Input
                      id="validade"
                      name="validade"
                      type="number"
                      value={formData.validade}
                      onChange={handleChange}
                      placeholder="10"
                      min="1"
                      max="365"
                      className="focus:border-primary"
                    />
                  </div>
                </div>

                {/* Nome do Projeto */}
                <div className="space-y-2">
                  <Label htmlFor="nomeProjeto" className="text-sm font-semibold text-gray-700">
                    Nome do Projeto *
                  </Label>
                  <Input
                    id="nomeProjeto"
                    name="nomeProjeto"
                    value={formData.nomeProjeto}
                    onChange={handleChange}
                    placeholder="Ex: Otimização de Processos Comerciais"
                    className={`transition-all duration-200 ${errors.nomeProjeto ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'}`}
                  />
                  {errors.nomeProjeto && <p className="text-red-500 text-sm">{errors.nomeProjeto}</p>}
                </div>

                {/* Descrição do Problema */}
                <div className="space-y-2">
                  <Label htmlFor="descricaoProblema" className="text-sm font-semibold text-gray-700">
                    Descrição do Problema *
                  </Label>
                  <Textarea
                    id="descricaoProblema"
                    name="descricaoProblema"
                    value={formData.descricaoProblema}
                    onChange={handleChange}
                    placeholder="Descreva o problema ou desafio que o cliente está enfrentando..."
                    rows={4}
                    className={`transition-all duration-200 resize-none ${errors.descricaoProblema ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'}`}
                  />
                  {errors.descricaoProblema && <p className="text-red-500 text-sm">{errors.descricaoProblema}</p>}
                </div>

                {/* Solução Proposta */}
                <div className="space-y-2">
                  <Label htmlFor="solucaoProposta" className="text-sm font-semibold text-gray-700">
                    Solução Proposta *
                  </Label>
                  <Textarea
                    id="solucaoProposta"
                    name="solucaoProposta"
                    value={formData.solucaoProposta}
                    onChange={handleChange}
                    placeholder="Descreva detalhadamente a solução que você propõe..."
                    rows={4}
                    className={`transition-all duration-200 resize-none ${errors.solucaoProposta ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'}`}
                  />
                  {errors.solucaoProposta && <p className="text-red-500 text-sm">{errors.solucaoProposta}</p>}
                </div>

                {/* Benefícios */}
                <div className="space-y-2">
                  <Label htmlFor="beneficios" className="text-sm font-semibold text-gray-700">
                    Benefícios *
                  </Label>
                  <Textarea
                    id="beneficios"
                    name="beneficios"
                    value={formData.beneficios}
                    onChange={handleChange}
                    placeholder="Liste os principais benefícios que o cliente obterá com a solução..."
                    rows={4}
                    className={`transition-all duration-200 resize-none ${errors.beneficios ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'}`}
                  />
                  {errors.beneficios && <p className="text-red-500 text-sm">{errors.beneficios}</p>}
                </div>

                {/* Linha 3: Prazo e Valor */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="prazoEntrega" className="text-sm font-semibold text-gray-700">
                      Prazo de Entrega *
                    </Label>
                    <Input
                      id="prazoEntrega"
                      name="prazoEntrega"
                      value={formData.prazoEntrega}
                      onChange={handleChange}
                      placeholder="Ex: 30 dias / 4-6 semanas"
                      className={`transition-all duration-200 ${errors.prazoEntrega ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'}`}
                    />
                    {errors.prazoEntrega && <p className="text-red-500 text-sm">{errors.prazoEntrega}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="valor" className="text-sm font-semibold text-gray-700">
                      Valor *
                    </Label>
                    <Input
                      id="valor"
                      name="valor"
                      value={formData.valor}
                      onChange={handleChange}
                      placeholder="Ex: R$ 5.000,00 / R$ 3.000,00 - R$ 5.000,00"
                      className={`transition-all duration-200 ${errors.valor ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'}`}
                    />
                    {errors.valor && <p className="text-red-500 text-sm">{errors.valor}</p>}
                  </div>
                </div>

                {/* Botão de Submit */}
                <div className="pt-6">
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Gerar Proposta Comercial
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    ✨ Sua proposta será gerada instantaneamente com design profissional
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProposalForm;

