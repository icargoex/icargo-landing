import React from "react"
import tw, { styled } from "twin.macro"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ken Chen",
      title: "Founder & President",
      description:
        "Founder & GM (2005-2017) OlymTech China, leading SaaS provider for freight forwarding industry funded by IDG Matrix  Yungi Venture and merged with WWL & Cainiao, logistics division of Alibaba Group in 2017. Before OlymTech, Ken served as director of B.D and later as GM for Singlee Technology, a HongKong based banking system provider in its NYC and the Silicon Valley office.",
      imageComponent: (
        <StaticImage
          src="../../images/team/team1.jpg"
          alt="Ken Chen"
          placeholder="blurred"
          width={300}
          height={300}
          objectFit="cover"
          objectPosition="center"
          fallback={<div tw="bg-blue-300 h-full w-full" />}
        />
      ),
    },
    {
      name: "Emma Wu",
      title: "VP, Business Development",
      description:
        "Regional Manager for iCargoEx East & Mid West regions including New Jersey, Chicago, Houston, & Savannah since 2019 Prior to joining iCargoEx, Emma served as logistics manager for Total Solutions at its NJ location. Emma Wu was also the Co-founder of Shanghai HY Industry, achieved $1.2 million annual sales in 2016. From 2003-2009, she acted as the Executive VP of Ubisoft Shanghai. Emma holds a degree in Master of Supply Chain Analytics from Rutgers in 2023, Master of Business Administration from Donghua University in 2012, and Bachelor of Logistics Management from Beijing Wuzi University in 2003.",
      imageComponent: (
        <StaticImage
          src="../../images/team/team2.png"
          alt="Emma Wu"
          placeholder="blurred"
          width={300}
          height={300}
          objectFit="cover"
          objectPosition="center"
          fallback={<div tw="bg-blue-300 h-full w-full" />}
        />
      ),
    },
    {
      name: "Emma Zhuang",
      title: "Regional Manager, West Coast",
      description:
        "Regional Manager for iCargoEx West region incluuding LosAngeles, Oakland, & Salt Lake City since 2020 Prior joining iCargoEx, Emma served as warehouse manager for Z4 Trucking based in Rancho Cucamonga CA. Emma served as Account Manager in Liaoning Peace Travel Agency from 2004-2008 and served as Director of Marketing & Sales for the Shenyang Ocean Travel Group from 2008 to 2018.",
      imageComponent: (
        <StaticImage
          src="../../images/team/team3.png"
          alt="Emma Zhuang"
          placeholder="blurred"
          width={300}
          height={300}
          objectFit="cover"
          objectPosition="center"
          fallback={<div tw="bg-blue-300 h-full w-full" />}
        />
      ),
    },
  ]

  return (
    <section id="team" tw="py-20 bg-gray-50">
      <div tw="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          tw="mb-12"
        >
          <div tw="max-w-lg mx-auto text-center mb-16">
            <SectionTitle>Our Leadership Team</SectionTitle>
            <p tw="text-gray-600">
              Meet the experts behind our successful fulfillment operations. Our
              leadership team brings decades of experience in logistics,
              technology, and e-commerce to deliver exceptional service.
            </p>
          </div>

          <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
    >
      <Card>
        <div tw="overflow-hidden rounded-t-lg text-center flex items-center justify-center">
          {member.imageComponent}
        </div>
        <CardContent>
          <h3 tw="font-bold text-xl text-blue-800">{member.name}</h3>
          <p tw="text-yellow-500 font-medium text-sm mb-3">{member.title}</p>
          <p tw="text-gray-600 text-base">{member.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const SectionTitle = styled.h2`
  ${tw`text-blue-800 text-3xl md:text-4xl font-bold mb-6 text-center`}

  &:after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    ${tw`bg-yellow-400 mx-auto mt-4`}
  }
`

const Card = styled.div`
  ${tw`bg-white rounded-lg shadow-lg overflow-hidden h-full`}
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    ${tw`shadow-xl`}
  }
`

const CardContent = styled.div`
  ${tw`p-6`}
`

export default TeamSection
