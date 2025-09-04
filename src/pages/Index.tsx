import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-tech-black">IT CONSULTING</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-tech-gray hover:text-electric transition-colors">Услуги</a>
              <a href="#expertise" className="text-tech-gray hover:text-electric transition-colors">Экспертиза</a>
              <a href="#cases" className="text-tech-gray hover:text-electric transition-colors">Кейсы</a>
              <a href="#team" className="text-tech-gray hover:text-electric transition-colors">Команда</a>
              <a href="#contacts" className="text-tech-gray hover:text-electric transition-colors">Контакты</a>
            </div>
            <Button className="bg-electric text-white hover:bg-electric/90">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-electric/10 to-tech-black/20"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-tech-black mb-6 leading-tight">
                Цифровая
                <span className="text-electric block">трансформация</span>
                вашего бизнеса
              </h1>
              <p className="text-xl text-tech-gray mb-8 leading-relaxed">
                Консалтинг в сфере IT технологий, финансов и автоматизации бизнес-процессов. 
                Превращаем идеи в эффективные решения.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-electric text-white hover:bg-electric/90 px-8 py-4">
                  Начать проект
                </Button>
                <Button variant="outline" size="lg" className="border-electric text-electric hover:bg-electric/10 px-8 py-4">
                  Консультация
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-electric/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/img/f597da1d-dece-44f7-b2b7-12fa7bd3c9bf.jpg" 
                alt="Tech Background" 
                className="relative rounded-3xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-background to-tech-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tech-black mb-4">Наши услуги</h2>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Комплексные решения для автоматизации и оптимизации бизнес-процессов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-electric/20 transition-colors">
                  <Icon name="Database" size={32} className="text-electric" />
                </div>
                <h3 className="text-2xl font-bold text-tech-black mb-4">CRM/ERP системы</h3>
                <p className="text-tech-gray leading-relaxed">
                  Внедрение и настройка систем управления взаимоотношениями с клиентами и планирования ресурсов предприятия.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-electric/20 transition-colors">
                  <Icon name="Workflow" size={32} className="text-electric" />
                </div>
                <h3 className="text-2xl font-bold text-tech-black mb-4">Автоматизация процессов</h3>
                <p className="text-tech-gray leading-relaxed">
                  Анализ, проектирование и внедрение автоматизированных бизнес-процессов для повышения эффективности.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-electric/20 transition-colors">
                  <Icon name="BarChart3" size={32} className="text-electric" />
                </div>
                <h3 className="text-2xl font-bold text-tech-black mb-4">Бизнес-аналитика</h3>
                <p className="text-tech-gray leading-relaxed">
                  Системы сбора, обработки и анализа данных для принятия обоснованных бизнес-решений.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tech-black mb-4">Наша экспертиза</h2>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Глубокие знания в области современных технологий и бизнес-процессов
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-electric to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Code" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-tech-black mb-4">IT Технологии</h3>
              <p className="text-tech-gray">
                Разработка и внедрение программных решений, облачные технологии, интеграция систем
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-electric to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="TrendingUp" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-tech-black mb-4">Финансы</h3>
              <p className="text-tech-gray">
                Финансовое планирование, бюджетирование, системы управленческого учета и отчетности
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-electric to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Settings" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-tech-black mb-4">Автоматизация</h3>
              <p className="text-tech-gray">
                Роботизация процессов, искусственный интеллект, машинное обучение для бизнеса
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-gradient-to-b from-background to-tech-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tech-black mb-4">Успешные кейсы</h2>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Примеры реализованных проектов и достигнутых результатов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <Icon name="TrendingUp" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-tech-black">Автоматизация производства</h3>
                    <p className="text-tech-gray">Промышленное предприятие</p>
                  </div>
                </div>
                <p className="text-tech-gray mb-6">
                  Внедрение системы планирования производства и контроля качества. 
                  Сокращение времени производственного цикла на 35%.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-electric">-35%</span>
                  <span className="text-tech-gray">время цикла</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Icon name="Users" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-tech-black">CRM система</h3>
                    <p className="text-tech-gray">Торговая компания</p>
                  </div>
                </div>
                <p className="text-tech-gray mb-6">
                  Разработка и внедрение CRM-системы для управления клиентской базой. 
                  Увеличение конверсии продаж на 42%.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-electric">+42%</span>
                  <span className="text-tech-gray">конверсия</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tech-black mb-4">Наша команда</h2>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Опытные специалисты с глубокой экспертизой в различных областях
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-electric to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="User" size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-tech-black mb-2">Алексей Иванов</h3>
                <p className="text-electric font-medium mb-4">Технический директор</p>
                <p className="text-tech-gray">
                  15+ лет опыта в разработке и внедрении IT-решений для крупных предприятий
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-electric to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="User" size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-tech-black mb-2">Мария Петрова</h3>
                <p className="text-electric font-medium mb-4">Бизнес-аналитик</p>
                <p className="text-tech-gray">
                  Специалист по оптимизации бизнес-процессов и внедрению систем управления
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-electric to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="User" size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-tech-black mb-2">Дмитрий Козлов</h3>
                <p className="text-electric font-medium mb-4">Финансовый консультант</p>
                <p className="text-tech-gray">
                  Эксперт в области финансового планирования и управленческого учета
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-tech-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Готовы обсудить ваш проект и найти оптимальное решение
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-electric/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Phone" size={32} className="text-electric" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Телефон</h3>
              <p className="text-gray-300">+7 (495) 123-45-67</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-electric/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Mail" size={32} className="text-electric" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email</h3>
              <p className="text-gray-300">info@itconsulting.ru</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-electric/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="MapPin" size={32} className="text-electric" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Адрес</h3>
              <p className="text-gray-300">г. Москва, ул. Тверская, д. 1</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-electric text-white hover:bg-electric/90 px-12 py-4">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tech-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-white mb-4 md:mb-0">IT CONSULTING</div>
            <p className="text-gray-400">© 2024 IT Consulting. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}