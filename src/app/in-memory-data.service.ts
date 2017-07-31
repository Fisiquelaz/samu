import { InMemoryDbService } from 'angular-in-memory-web-api';
import {UF} from './types/uf';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ufs : UF[] = [
        {id: 11, nome: "Rondônia", area: 237765.376},
        {id: 12, nome: "Acre", area: 164123.712},
        {id: 13, nome: "Amazonas", area: 1559149.074},
        {id: 14, nome: "Roraima", area: 224301.080},
        {id: 15, nome: "Pará", area: 1247955.381},
        {id: 16, nome: "Amapá", area: 142828.523},
        {id: 17, nome: "Tocantins", area: 277720.567},
        {id: 21, nome: "Maranhão", area: 331936.955},
        {id: 22, nome: "Piauí", area: 251611.934},
        {id: 23, nome: "Ceará", area: 148887.632},
        {id: 24, nome: "Rio Grande do Norte", area: 52811.110},
        {id: 25, nome: "Paraíba", area: 56468.427},
        {id: 26, nome: "Pernambuco", area: 98076.001},
        {id: 27, nome: "Alagoas", area: 27848.158},
        {id: 28, nome: "Sergipe", area: 21918.454},
        {id: 29, nome: "Bahia", area: 564732.642},
        {id: 31, nome: "Minas Gerais", area: 586521.235},
        {id: 32, nome: "Espírito Santo", area: 46089.390},
        {id: 33, nome: "Rio de Janeiro", area: 43781.566},
        {id: 35, nome: "São Paulo", area: 248221.996},
        {id: 41, nome: "Paraná", area: 199307.985},
        {id: 42, nome: "Santa Catarina", area: 95737.895},
        {id: 43, nome: "Rio Grande do Sul", area: 281737.947},
        {id: 50, nome: "Mato Grosso do Sul", area: 357145.534},
        {id: 51, nome: "Mato Grosso", area: 903198.091},
        {id: 52, nome: "Goiás", area: 340110.385},
        {id: 53, nome: "Distrito Federal", area: 5779.999}
    ];
    const VALORES = [
        {valor:294,uf_id:42,ano:2013},
        {valor:75,uf_id:28,ano:2013},
        {valor:16,uf_id:17,ano:2013},
        {valor:1,uf_id:11,ano:2010},
        {valor:22,uf_id:12,ano:2010},
        {valor:1,uf_id:13,ano:2010},
        {valor:3,uf_id:16,ano:2010},
        {valor:46,uf_id:23,ano:2010},
        {valor:102,uf_id:27,ano:2010},
        {valor:75,uf_id:28,ano:2010},
        {valor:20,uf_id:33,ano:2010},
        {valor:246,uf_id:52,ano:2010},
        {valor:1,uf_id:53,ano:2010},
        {valor:1,uf_id:11,ano:2006},
        {valor:14,uf_id:12,ano:2006},
        {valor:1,uf_id:13,ano:2006},
        {valor:0,uf_id:14,ano:2006},
        {valor:6,uf_id:15,ano:2006},
        {valor:2,uf_id:16,ano:2006},
        {valor:11,uf_id:17,ano:2006},
        {valor:33,uf_id:21,ano:2006},
        {valor:97,uf_id:22,ano:2006},
        {valor:2,uf_id:23,ano:2006},
        {valor:10,uf_id:24,ano:2006},
        {valor:25,uf_id:25,ano:2006},
        {valor:17,uf_id:26,ano:2006},
        {valor:28,uf_id:27,ano:2006},
        {valor:71,uf_id:28,ano:2006},
        {valor:13,uf_id:29,ano:2006},
        {valor:18,uf_id:31,ano:2006},
        {valor:6,uf_id:32,ano:2006},
        {valor:19,uf_id:33,ano:2006},
        {valor:100,uf_id:35,ano:2006},
        {valor:15,uf_id:41,ano:2006},
        {valor:293,uf_id:42,ano:2006},
        {valor:39,uf_id:43,ano:2006},
        {valor:1,uf_id:50,ano:2006},
        {valor:8,uf_id:51,ano:2006},
        {valor:72,uf_id:52,ano:2006},
        {valor:1,uf_id:53,ano:2006},
        {valor:1,uf_id:11,ano:2007},
        {valor:22,uf_id:12,ano:2007},
        {valor:1,uf_id:13,ano:2007},
        {valor:0,uf_id:14,ano:2007},
        {valor:6,uf_id:15,ano:2007},
        {valor:2,uf_id:16,ano:2007},
        {valor:10,uf_id:17,ano:2007},
        {valor:33,uf_id:21,ano:2007},
        {valor:96,uf_id:22,ano:2007},
        {valor:2,uf_id:23,ano:2007},
        {valor:10,uf_id:24,ano:2007},
        {valor:25,uf_id:25,ano:2007},
        {valor:35,uf_id:26,ano:2007},
        {valor:28,uf_id:27,ano:2007},
        {valor:71,uf_id:28,ano:2007},
        {valor:14,uf_id:29,ano:2007},
        {valor:19,uf_id:31,ano:2007},
        {valor:7,uf_id:32,ano:2007},
        {valor:19,uf_id:33,ano:2007},
        {valor:129,uf_id:35,ano:2007},
        {valor:16,uf_id:41,ano:2007},
        {valor:293,uf_id:42,ano:2007},
        {valor:39,uf_id:43,ano:2007},
        {valor:1,uf_id:50,ano:2007},
        {valor:13,uf_id:51,ano:2007},
        {valor:141,uf_id:52,ano:2007},
        {valor:1,uf_id:53,ano:2007},
        {valor:1,uf_id:11,ano:2008},
        {valor:22,uf_id:12,ano:2008},
        {valor:1,uf_id:13,ano:2008},
        {valor:0,uf_id:14,ano:2008},
        {valor:6,uf_id:15,ano:2008},
        {valor:2,uf_id:16,ano:2008},
        {valor:11,uf_id:17,ano:2008},
        {valor:33,uf_id:21,ano:2008},
        {valor:96,uf_id:22,ano:2008},
        {valor:2,uf_id:23,ano:2008},
        {valor:10,uf_id:24,ano:2008},
        {valor:25,uf_id:25,ano:2008},
        {valor:35,uf_id:26,ano:2008},
        {valor:28,uf_id:27,ano:2008},
        {valor:71,uf_id:28,ano:2008},
        {valor:14,uf_id:29,ano:2008},
        {valor:19,uf_id:31,ano:2008},
        {valor:7,uf_id:32,ano:2008},
        {valor:19,uf_id:33,ano:2008},
        {valor:129,uf_id:35,ano:2008},
        {valor:16,uf_id:41,ano:2008},
        {valor:293,uf_id:42,ano:2008},
        {valor:39,uf_id:43,ano:2008},
        {valor:1,uf_id:50,ano:2008},
        {valor:13,uf_id:51,ano:2008},
        {valor:141,uf_id:52,ano:2008},
        {valor:1,uf_id:53,ano:2008},
        {valor:1,uf_id:11,ano:2009},
        {valor:22,uf_id:12,ano:2009},
        {valor:1,uf_id:13,ano:2009},
        {valor:1,uf_id:14,ano:2009},
        {valor:7,uf_id:15,ano:2009},
        {valor:2,uf_id:16,ano:2009},
        {valor:11,uf_id:17,ano:2009},
        {valor:42,uf_id:21,ano:2009},
        {valor:191,uf_id:22,ano:2009},
        {valor:16,uf_id:23,ano:2009},
        {valor:10,uf_id:24,ano:2009},
        {valor:45,uf_id:25,ano:2009},
        {valor:38,uf_id:26,ano:2009},
        {valor:28,uf_id:27,ano:2009},
        {valor:71,uf_id:28,ano:2009},
        {valor:44,uf_id:29,ano:2009},
        {valor:105,uf_id:31,ano:2009},
        {valor:7,uf_id:32,ano:2009},
        {valor:19,uf_id:33,ano:2009},
        {valor:134,uf_id:35,ano:2009},
        {valor:16,uf_id:41,ano:2009},
        {valor:290,uf_id:42,ano:2009},
        {valor:39,uf_id:43,ano:2009},
        {valor:3,uf_id:50,ano:2009},
        {valor:23,uf_id:51,ano:2009},
        {valor:170,uf_id:52,ano:2009},
        {valor:1,uf_id:53,ano:2009},
        {valor:1,uf_id:13,ano:2013},
        {valor:1,uf_id:53,ano:2013},
        {valor:2,uf_id:11,ano:2013},
        {valor:22,uf_id:12,ano:2013},
        {valor:102,uf_id:27,ano:2013},
        {valor:1,uf_id:13,ano:2012},
        {valor:3,uf_id:16,ano:2013},
        {valor:262,uf_id:29,ano:2013},
        {valor:46,uf_id:23,ano:2013},
        {valor:1,uf_id:53,ano:2012},
        {valor:12,uf_id:32,ano:2013},
        {valor:246,uf_id:52,ano:2013},
        {valor:241,uf_id:31,ano:2013},
        {valor:10,uf_id:50,ano:2013},
        {valor:45,uf_id:15,ano:2013},
        {valor:223,uf_id:25,ano:2013},
        {valor:75,uf_id:26,ano:2013},
        {valor:122,uf_id:22,ano:2013},
        {valor:43,uf_id:33,ano:2013},
        {valor:1,uf_id:13,ano:2011},
        {valor:1,uf_id:53,ano:2011},
        {valor:1,uf_id:11,ano:2011},
        {valor:22,uf_id:12,ano:2011},
        {valor:102,uf_id:27,ano:2011},
        {valor:246,uf_id:52,ano:2011},
        {valor:23,uf_id:33,ano:2011},
        {valor:75,uf_id:28,ano:2011},
        {valor:3,uf_id:16,ano:2011},
        {valor:203,uf_id:29,ano:2011},
        {valor:46,uf_id:23,ano:2011},
        {valor:12,uf_id:32,ano:2011},
        {valor:44,uf_id:21,ano:2011},
        {valor:155,uf_id:31,ano:2011},
        {valor:6,uf_id:50,ano:2011},
        {valor:18,uf_id:51,ano:2011},
        {valor:8,uf_id:15,ano:2011},
        {valor:223,uf_id:25,ano:2011},
        {valor:53,uf_id:26,ano:2011},
        {valor:129,uf_id:22,ano:2011},
        {valor:81,uf_id:41,ano:2011},
        {valor:17,uf_id:24,ano:2011},
        {valor:3,uf_id:14,ano:2011},
        {valor:154,uf_id:43,ano:2011},
        {valor:294,uf_id:42,ano:2011},
        {valor:285,uf_id:35,ano:2011},
        {valor:16,uf_id:17,ano:2011},
        {valor:180,uf_id:29,ano:2010},
        {valor:12,uf_id:32,ano:2010},
        {valor:44,uf_id:21,ano:2010},
        {valor:155,uf_id:31,ano:2010},
        {valor:6,uf_id:50,ano:2010},
        {valor:18,uf_id:51,ano:2010},
        {valor:8,uf_id:15,ano:2010},
        {valor:191,uf_id:25,ano:2010},
        {valor:53,uf_id:26,ano:2010},
        {valor:12,uf_id:22,ano:2010},
        {valor:81,uf_id:41,ano:2010},
        {valor:17,uf_id:24,ano:2010},
        {valor:3,uf_id:14,ano:2010},
        {valor:154,uf_id:43,ano:2010},
        {valor:294,uf_id:42,ano:2010},
        {valor:231,uf_id:35,ano:2010},
        {valor:16,uf_id:17,ano:2010},
        {valor:22,uf_id:12,ano:2012},
        {valor:102,uf_id:27,ano:2012},
        {valor:3,uf_id:16,ano:2012},
        {valor:203,uf_id:29,ano:2012},
        {valor:46,uf_id:23,ano:2012},
        {valor:12,uf_id:32,ano:2012},
        {valor:246,uf_id:52,ano:2012},
        {valor:48,uf_id:21,ano:2012},
        {valor:241,uf_id:31,ano:2012},
        {valor:6,uf_id:50,ano:2012},
        {valor:18,uf_id:51,ano:2012},
        {valor:46,uf_id:15,ano:2012},
        {valor:223,uf_id:25,ano:2012},
        {valor:53,uf_id:26,ano:2012},
        {valor:129,uf_id:22,ano:2012},
        {valor:131,uf_id:41,ano:2012},
        {valor:43,uf_id:33,ano:2012},
        {valor:17,uf_id:24,ano:2012},
        {valor:2,uf_id:11,ano:2012},
        {valor:3,uf_id:14,ano:2012},
        {valor:154,uf_id:43,ano:2012},
        {valor:294,uf_id:42,ano:2012},
        {valor:75,uf_id:28,ano:2012},
        {valor:349,uf_id:35,ano:2012},
        {valor:16,uf_id:17,ano:2012},
        {valor:51,uf_id:21,ano:2013},
        {valor:29,uf_id:51,ano:2013},
        {valor:174,uf_id:41,ano:2013},
        {valor:22,uf_id:24,ano:2013},
        {valor:15,uf_id:14,ano:2013},
        {valor:256,uf_id:43,ano:2013},
        {valor:371,uf_id:35,ano:2013},
        {valor:22,uf_id:12,ano:2014},
        {valor:102,uf_id:27,ano:2014},
        {valor:1,uf_id:13,ano:2014},
        {valor:3,uf_id:16,ano:2014},
        {valor:46,uf_id:23,ano:2014},
        {valor:1,uf_id:53,ano:2014},
        {valor:12,uf_id:32,ano:2014},
        {valor:246,uf_id:52,ano:2014},
        {valor:241,uf_id:31,ano:2014},
        {valor:223,uf_id:25,ano:2014},
        {valor:122,uf_id:22,ano:2014},
        {valor:2,uf_id:11,ano:2014},
        {valor:15,uf_id:14,ano:2014},
        {valor:256,uf_id:43,ano:2014},
        {valor:75,uf_id:28,ano:2014},
        {valor:370,uf_id:35,ano:2014},
        {valor:16,uf_id:17,ano:2014},
        {valor:294,uf_id:29,ano:2014},
        {valor:52,uf_id:21,ano:2014},
        {valor:13,uf_id:50,ano:2014},
        {valor:30,uf_id:51,ano:2014},
        {valor:69,uf_id:15,ano:2014},
        {valor:102,uf_id:26,ano:2014},
        {valor:269,uf_id:41,ano:2014},
        {valor:44,uf_id:33,ano:2014},
        {valor:25,uf_id:24,ano:2014},
        {valor:293,uf_id:42,ano:2014}
    ];
    return {VALORES};
  }
}
